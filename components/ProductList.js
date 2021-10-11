import ProductCard from "./ProductCard";
import styles from "../styles/Home.module.css";

export default function ProductList({ products }) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.id} className={styles.listItem}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        </li>
      ))}
    </ul>
  );
}
