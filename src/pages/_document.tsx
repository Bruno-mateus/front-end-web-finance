import { Head, Html, NextScript,Main } from "next/document"
import { getCssText } from "../styles"


export default function Document(){

    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"  />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet"/>
                <meta charSet="utf-8" lang='pt-BR' />
                <meta name="viewport" content="width=device-width, initial-scale"/>
                <style id="stitches" dangerouslySetInnerHTML={{__html:getCssText()}}/>
            </Head>
            <body>
                <NextScript/>
                <Main/>
            </body>
        </Html>
    )
}

