import { Html, Head, Main, NextScript } from "next/document";

export default function Documnet() {
  return (
    <Html lang="es">
      <title>AdelkisDev</title>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="My personal Portfolio and Blog of React Js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
