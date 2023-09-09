import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Farhan&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Farhan Gunawan, Fullstack Developer and Web Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Farhan Gunawan. A Fullstack Developer and Web Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Farhan Gunawan"
      />

      <link
        rel="icon"
        href="/assets/svg/favicon.svg"
      />
    </Head>
  );
}
