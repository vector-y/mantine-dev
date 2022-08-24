import '../styles/globals.css'
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
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

export default App
