// import withRedux from "next-redux-wrapper";
import { AppProps } from "next/app";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "../redux/reducers";
import "bootstrap-css-only/css/bootstrap.min.css";

// const makeStore = (initialState, options) => {
//   return createStore(reducer, initialState);
// };

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
};

export default MyApp;

// export default withRedux(makeStore)(MyApp);
