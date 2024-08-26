// HomePageEs.js
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import EmailIcon from "./icons/EmailIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import PedraIcon from "./icons/PedraIcon";
import FelixIngla from "./images/felix-ingla-picture.jpeg";

function HomePageEs() {
  return (
    <div className="App-content">
      <Helmet>
        <html lang="es" />
        <title>Felix Ingla - Fundador de Pedra</title>
        <meta
          name="description"
          content="Felix Ingla, fundador de Pedra. Aplicación web para profesionales inmobiliarios: home staging virtual y mejora de fotografía inmobiliaria. Contacta para software inmobiliario innovador."
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
            Soy el fundador de{" "}
            <a
              href="https://pedra.so"
              rel="noopener"
              alt="Félix Ingla, fundador de Pedra"
            >
              <PedraIcon color={"#F8792A"} />
              {" Pedra"}
            </a>
            , una aplicación web de software para ayudar a los profesionales
            inmobiliarios a crear{" "}
            <a
              href="https://pedra.so/home-staging-virtual"
              rel="noopener"
              title="Home Staging Virtual con Pedra"
            >
              home stagings virtuales
            </a>{" "}
            y mejorar su{" "}
            <a
              href="https://pedra.so/real-estate-photography"
              rel="noopener"
              title="Mejora de Fotografía Inmobiliaria con Pedra"
            >
              fotografía inmobiliaria
            </a>
            .
          </p>
        </div>
      </header>
      <article>
        <p>
          Ponte en contacto si te apasiona el software inmobiliario bien
          diseñado.
        </p>
        <p>
          Puedes conectar conmigo a través de{" "}
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

export default HomePageEs;
