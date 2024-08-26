// HomePageEn.js
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import EmailIcon from "./icons/EmailIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import PedraIcon from "./icons/PedraIcon";
import FelixIngla from "./images/felix-ingla-picture.jpeg";

function HomePageEn() {
  return (
    <div className="App-content">
      <Helmet>
        <html lang="en" />
        <title>Felix Ingla - Founder of Pedra</title>
        <meta
          name="description"
          content="Felix Ingla, founder of Pedra. Web application for real estate professionals: virtual home staging and real estate photography enhancement. Contact for innovative real estate software."
        />
      </Helmet>
      <header>
        <h1>Felix Ingla</h1>
        <div className="header">
          <img
            src={FelixIngla}
            alt="Felix Ingla"
            height={"80px"}
            style={{ borderRadius: "50px" }}
          />
          <p>
            I am the founder of{" "}
            <a
              href="https://pedra.so"
              rel="noopener"
              alt="Felix Ingla, founder of Pedra"
            >
              <PedraIcon color={"#F8792A"} />
              {" Pedra"}
            </a>
            , a software web application to help real estate professionals
            create{" "}
            <a
              href="https://pedra.so/home-staging-virtual"
              rel="noopener"
              title="Virtual Home Staging with Pedra"
            >
              virtual home stagings
            </a>{" "}
            and improve their{" "}
            <a
              href="https://pedra.so/real-estate-photography"
              rel="noopener"
              title="Real Estate Photography Enhancement with Pedra"
            >
              real estate photography
            </a>
            .
          </p>
        </div>
      </header>
      <article>
        <p>
          Please reach out if you are passionate about well-designed real estate
          software.
        </p>
        <p>
          You can connect with me via{" "}
          <a href="mailto:felix@pedra.so">
            {" "}
            <EmailIcon /> felix@pedra.so
          </a>
          , or via{" "}
          <a
            href="https://www.linkedin.com/in/felixingla/"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            {" LinkedIn"}
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default HomePageEn;
