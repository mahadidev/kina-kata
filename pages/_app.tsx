import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navigation/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Online Shopping || Kina Kata</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
