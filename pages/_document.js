import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // 1) Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // 2) Retrieve styles from components in the page
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

        // 3) Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // 4) Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* 5) Output the styles in the head  */}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {this.props.styleTags}
                    <title>ACG - Intranet</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
