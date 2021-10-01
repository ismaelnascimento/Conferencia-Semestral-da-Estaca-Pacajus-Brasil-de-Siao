import React from "react";

// ...
import Count from "../components/Count";
import Header from "../components/header";
import Footer from "../components/footer";

// back
import image_background from "../assets/images/church_youth_development.jpeg";

// icons
import { SiGithub } from "react-icons/si";

function index() {
  return (
    <div className="app">
      <img
        src={image_background}
        alt="image_background"
        className="app-image_background"
      />
      {/* CONTENT */}
      <div className="app-content">
        <Header />
        <Count />
        <Footer />
        <div className="app-footer">
          by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/maell_nascimento/"
          >
            Ismael Nascimento
          </a>{" "}
          <SiGithub
            onClick={() => window.open("https://github.com/ismaelnascimento")}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
