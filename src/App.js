import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePageEn from "./HomePageEn";
import HomePageEs from "./HomePageEs";
import HomePageCa from "./HomePageCa";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <link
            rel="alternate"
            hrefLang="en"
            href="https://felixingla.com/en"
          />
          <link
            rel="alternate"
            hrefLang="es"
            href="https://felixingla.com/es"
          />
          <link
            rel="alternate"
            hrefLang="ca"
            href="https://felixingla.com/ca"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://felixingla.com"
          />
        </Helmet>
        <div className="App-content">
          <Routes>
            <Route path="/en" element={<HomePageEn />} />
            <Route path="/es" element={<HomePageEs />} />
            <Route path="/ca" element={<HomePageCa />} />
            <Route path="/" element={<HomePageEn />} />
          </Routes>
        </div>
        <div className="App-content">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
