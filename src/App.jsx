import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mainpage from "./components/Mainpage";
import Page1 from "./components/Page1";
import Header from "./components/Header";
import Certificat from "./components/Certificat";
import Page2 from "./components/Page2";
import AOS from "aos";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import Inquery from "./components/Inquery";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./page2.0/Work";
import Medica from "./page2.0/Medica";
import Agric from "./page2.0/Agric";
import OtherS from "./page2.0/OtherS";
import MainP from "./components/MainP";
import WhyUs from "./components/Whyus";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1000ms animation
  }, []);

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainP />
                <Mainpage />
                <Page1 />
                {/* <Page2 /> */}
                <Work></Work>
                <Certificat />
               <WhyUs/>
                <Inquery />
              </>
            }
          />

          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Certificat" element={<Certificat />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/inquiry" element={<Inquery />} />
          <Route path="/Medica" element={<Medica />} />
          <Route path="/Agric" element={<Agric />} />
          <Route path="/Other" element={<OtherS />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
