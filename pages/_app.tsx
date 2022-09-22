import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Online Shopping || Kina Kata</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
