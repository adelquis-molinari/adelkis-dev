import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../src/components/footer/footer";

export default function Documnet() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <title>Adelkis.dev</title>
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
