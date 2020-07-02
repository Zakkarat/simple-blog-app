import withRedux from "next-redux-wrapper";
import { AppInitialProps, AppProps } from "next/app";
import { createStore, Store } from "redux";
import { Provider, RootStateOrAny } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "../src/Redux/reducer";
import "bootstrap-css-only/css/bootstrap.min.css";
import Head from "next/head";

type Props = { store: Store } & AppInitialProps & AppProps;

const makeStore = (initialState: RootStateOrAny) => {
  return createStore(reducer, initialState, devToolsEnhancer({}));
};

const MyApp = ({ Component, pageProps, store }: Props) => {
  return (
    <>
      <Head>
        <title>Simple React Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/css/mdb.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default withRedux(makeStore)(MyApp);
