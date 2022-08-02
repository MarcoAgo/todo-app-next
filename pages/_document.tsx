import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import { getCssText } from "../styles/styled/stitches.config";

export default class Document extends NextDocument {
    static async getInitialProps(ctx: any) {
        try {
            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                    </>
                ),
            };
        } finally {}
    } 

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <div id='portal' /> 
                    <NextScript />
                </body>
            </Html>
        );
    }
}
