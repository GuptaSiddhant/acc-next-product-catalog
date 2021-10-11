import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";
import { useState, useMemo } from "react";
import useQuery from "../utils/useQuery";
import Loading from "../components/Loading";
import Link from "next/link";

const DEFAULT_CATEGORY = "all";

export default function Home() {
  const [products, { loading: productsLoading }] = useQuery("products");
  const [categories, { loading: categoriesLoading }] = useQuery(
    "products/categories"
  );

  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  // const [filteredProducts, setFilteredProducts] = useState(data);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === DEFAULT_CATEGORY
        ? products || []
        : products?.filter(
            (product) => product.category === selectedCategory
          ) || [],
    [selectedCategory, products]
  );

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Group 2 awesome products!</h1>

        <Link href="/product/new">
          <a>Add Product</a>
        </Link>

        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value={DEFAULT_CATEGORY}>All</option>
          {(categories || []).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {productsLoading ? (
          <Loading />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
