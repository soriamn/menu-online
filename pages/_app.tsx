import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../constants/theme";
import Font from "../constants/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
