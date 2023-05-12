import "@/styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";

export default function App({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Head>
        <title>Cockroach Poker</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
