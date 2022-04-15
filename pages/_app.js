import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import React, { useEffect } from "react";
import initFontAwesome from "../styles/initFontAwesome";
import "../styles/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="wrapper">
      <NavBar />
      <div className="container" data-aos="fade-left">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
initFontAwesome();
