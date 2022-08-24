import '../styles/globals.css'
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
          <title> Hold Up </title>
          <link rel="shortcut icon" href={ "/holdup.svg" }/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        theme={{colorScheme: "light",
        breakpoints: {
          xs: 600,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
        fontFamily: "Roboto"
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
