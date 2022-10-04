import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Footer, Navigation } from '../components';
import { persistor, store } from '../redux/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<GoogleOAuthProvider
			clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOEKN}`}
		>
			<Provider store={store}>
				<PersistGate loading={'null'} persistor={persistor}>
					<Head>
						<title>Online Shopping || Kina Kata</title>
					</Head>
					<Navigation />
					<Component {...pageProps} />
					<Footer />
				</PersistGate>
			</Provider>
		</GoogleOAuthProvider>
	);
};

export default MyApp;
