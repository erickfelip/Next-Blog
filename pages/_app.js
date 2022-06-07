import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import React from "react";
import initFontAwesome from "../styles/initFontAwesome";
import "../styles/index.scss";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <NextNProgress color="#9219bd" />
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
