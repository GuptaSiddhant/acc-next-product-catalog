import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Error404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is a 404 page!</h1>

        <Link href="/">
          <a>Back</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
