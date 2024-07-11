import React, { useEffect } from "react";
import HeaderTop from "./components/header/HeaderTop";
import "bootstrap/dist/css/bootstrap.min.css";


import { ColorModeContext, useMode } from "../src/mode/ThemeContext";
import "../src/mode/mode.css";
import HeaderMid from "./components/header/HeaderMid";
import "./index.css";
import HeaderBottom from "./components/header/HeaderBottom";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/scroll-button/ScrollButton";

const App = () => {
  const colorMode = useMode();
  useEffect(() => {
    document.body.className = colorMode.mode;
  }, [colorMode.mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className={colorMode.mode}>
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
        <Hero />
        <Main />
        <Footer/>
        <ScrollButton/>
      </div>
    </ColorModeContext.Provider>
  );
};

export default App;
