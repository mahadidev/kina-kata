import { AppProps } from "next/app";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/Navigation/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
