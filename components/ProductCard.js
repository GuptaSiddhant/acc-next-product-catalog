import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductCard({ id, title, image, price, category }) {
  const link = `/product/${id}`;
  return (
    <Link href={link}>
      <article className={styles.card}>
        <div>{title}</div>
        <Image src={image} width={100} height={100} />
        <div>Price: {price}</div>
        <div>Category: {category}</div>
      </article>
    </Link>
  );
}
