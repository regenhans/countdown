import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no user-scalable=0' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
