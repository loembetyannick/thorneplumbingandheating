import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title:'Thorne Plumbing and Heating Services Ltd',
  description: 'South Yorkshire Plumbing',
  icons: {
    icon: [
      '/favicon.ico'
    ]
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
