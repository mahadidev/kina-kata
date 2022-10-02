import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Footer, Navigation } from '../components';
import { store } from '../redux/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GoogleOAuthProvider
			clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOEKN}`}
		>
			<Provider store={store}>
				<Head>
					<title>Online Shopping || Kina Kata</title>
				</Head>
				<Navigation />
				<Component {...pageProps} />
				<Footer />
			</Provider>
		</GoogleOAuthProvider>
	);
};

export default MyApp;
