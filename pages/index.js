import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Storefront from "../components/Storefront";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NikZprojects Shopify Example</title>
        <meta
          name="description"
          content="Sopify app created with Tailwind, Shopify, and NEXT.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
        <Storefront />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
