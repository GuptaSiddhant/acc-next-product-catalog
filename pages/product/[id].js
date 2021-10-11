import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useQuery from "../../utils/useQuery";
import Loading from "../../components/Loading";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, { loading }] = useQuery(`products/${id}`);

  if (!product) return <Loading />;
  const { title, price, image, description, category, rating } = product;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
          <a>Back</a>
        </Link>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1 className={styles.title}>{title}</h1>
            <Image src={image} width={100} height={100} />
            <p>{category}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>
              Rating: {rating.rate} ({rating.count} reviews)
            </p>
          </>
        )}
      </main>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const product = data.find((product) => id === product.id.toString());
//   return {
//     props: { product },
//   };
// }

// export async function getStaticPaths() {
//   const paths = data.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
