import React from "react";
import NextHead from "next/head";

function Head() {
  const description = "Portfolio personal en donde muestro mis proyectos y dejo mis medios de contacto";
  const type = "website";
  const pageTitle = "Matias Sanchez Portfolio";
  const metaImage = () => "/tasks.ico";

  return (
    <NextHead>
      <title>{pageTitle}</title>

      <link rel="icon" href="/programmer.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

      <meta name="description" content={description} />
      <meta name="image" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="twitterCard" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" />
      <meta name="twitter:image:alt" content={pageTitle} />

      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:image" />
      <meta name="og:image:secure_url" />
      <meta name="og:image:alt" content={pageTitle} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </NextHead>
  );
}

export default Head;
