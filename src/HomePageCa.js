// HomePageCa.js
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import EmailIcon from "./icons/EmailIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import PedraIcon from "./icons/PedraIcon";
import FelixIngla from "./images/felix-ingla-picture.jpeg";

function HomePageCa() {
  return (
    <div className="App-content">
      <Helmet>
        <html lang="ca" />
        <title>Felix Ingla - Fundador de Pedra</title>
        <meta
          name="description"
          content="Felix Ingla, fundador de Pedra. Aplicació web per a professionals immobiliaris: home staging virtual i millora de fotografia immobiliària. Contacta per a programari immobiliari innovador."
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
            Sóc el fundador de{" "}
            <a
              href="https://pedra.so/es"
              rel="noopener"
              alt="Félix Ingla, fundador de Pedra"
            >
              <PedraIcon color={"#F8792A"} />
              {" Pedra"}
            </a>
            , una aplicació web per ajudar els professionals immobiliaris a
            crear{" "}
            <a
              href="https://pedra.so/es/home-staging-virtual"
              rel="noopener"
              title="Home Staging Virtual amb Pedra"
            >
              home stagings virtuals
            </a>{" "}
            i millorar la seva{" "}
            <a
              href="https://pedra.so/es/real-estate-photography"
              rel="noopener"
              title="Millora de Fotografia Immobiliària amb Pedra"
            >
              fotografia immobiliària
            </a>
            .
          </p>
        </div>
      </header>
      <article>
        <p>
          Si us plau, posa't en contacte si et apassiona el software immobiliari
          ben dissenyat.
        </p>
        <p>
          Pots connectar amb mi a través de{" "}
          <a href="mailto:felix@pedra.so">
            {" "}
            <EmailIcon /> felix@pedra.so
          </a>
          , o a través de{" "}
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

export default HomePageCa;
