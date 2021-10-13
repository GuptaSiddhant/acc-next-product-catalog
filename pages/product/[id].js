import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>This product is not available</p>;
  }

  const { title, price, image, description, category, rating } = product;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/product">
          <a>Back</a>
        </Link>

        <h1 className={styles.title}>{title}</h1>
        <Image src={image} width={100} height={100} />
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>
          Rating: {rating.rate} ({rating.count} reviews)
        </p>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const productResponse = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const product = await productResponse.json();

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const productsResponse = await fetch("https://fakestoreapi.com/products");
  const products = await productsResponse.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}
