import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../src/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adelkis.dev</title>
        <meta
          name="description"
          content="My personal Portfolio and Blog of React Js"
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Adelkis <a href="/">.dev</a>
        </h1>

        <p className={styles.description}>
          I'm Adelkis a developer with a lot of passion for developing sofware
          on the web. So in this blog I will expose all my coriosities and
          interests. The technology that I fell in love with and that caused my
          curiosity is React, so I can Consider myself a react developer.
        </p>
      </main>

      <Footer />
    </div>
  );
}
