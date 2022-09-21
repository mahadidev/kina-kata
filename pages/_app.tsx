import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navigation/Navbar";
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
    </Provider>
  );
};

export default MyApp;
