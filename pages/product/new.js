import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import useQuery from "../../utils/useQuery";
import useMutation from "../../utils/useMutation";
// import Loading from "../../components/Loading";

export default function ProductPage() {
  const [categories] = useQuery("products/categories");

  const [addProduct, { data: newProduct }] = useMutation("products");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;

    addProduct({ title, price, description, image, category });
  };

  const router = useRouter();

  useEffect(() => {
    if (newProduct) {
      router.push("/product/" + newProduct.id);
    }
  }, [newProduct]);

  return (
    <div className={styles.container}>
      <Head>
        <title>New product</title>
        <meta name="description" content="new product desc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/product">
          <a>Back</a>
        </Link>

        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input name="title" placeholder="Title" />
          <input name="price" placeholder="0.0" type="number" />
          <input name="description" placeholder="Description" />
          <input name="image" placeholder="Image" type="url" />
          <select name="category">
            {(categories || []).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
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
