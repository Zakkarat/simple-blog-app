// import withRedux from "next-redux-wrapper";
import { AppProps } from "next/app";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "../redux/reducers";
import "bootstrap-css-only/css/bootstrap.min.css";
import Head from "next/head";

// const makeStore = (initialState, options) => {
//   return createStore(reducer, initialState);
// };

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

// export default withRedux(makeStore)(MyApp);
