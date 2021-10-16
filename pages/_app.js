import { Provider } from "react-redux";
import storeFactory from "../utils/storeFactory";
import GlobalStyle from "../shared/styles/global";
const store = storeFactory();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </Provider>
  );
}

export default MyApp;
