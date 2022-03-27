import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <title>KINFISH LOVES SHITs</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="KINFE Loves SHIT" />
          <meta
            name="description"
            content="Explore more about KINFE and his shit he has done so far "
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://kinfish-crier-guy-v1.netlify.app/"
          />
          <meta property="og:title" content="KINFE Loves SHIT" />
          <meta
            property="og:description"
            content="Explore more about KINFE and his shit he has done so far  "
          />
          <meta property="og:image" content="./Kin.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://kinfish-crier-guy-v1.netlify.app/"
          />
          <meta property="twitter:title" content="KINFE Loves SHIT" />
          <meta
            property="twitter:description"
            content="Explore more about KINFE and his shit he has done so far "
          />
          <meta property="twitter:image" content="./Kin.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
