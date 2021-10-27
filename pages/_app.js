import { Provider } from "react-redux";
import storeFactory from "../utils/storeFactory";
import GlobalStyle from "../shared/styles/global";
import { Toaster } from "react-hot-toast";

const store = storeFactory();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <Component {...pageProps} />
        <Toaster />
      </GlobalStyle>
    </Provider>
  );
}

export default MyApp;
