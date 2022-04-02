import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import initFontAwesome from "../styles/initFontAwesome";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      < Footer />
    </>
  );
}

export default MyApp;
initFontAwesome();
