import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import React from "react";
import initFontAwesome from "../styles/initFontAwesome";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
initFontAwesome();
