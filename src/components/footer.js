import React, { useEffect } from "react";

// css
import "../styles/footer.css";

// icons
import icon_zoom from "../assets/icons/zoom-icon.png";
import icon_youtube from "../assets/icons/youtube-icon.png";

function Footer() {
  useEffect(() => {
    if (
      !localStorage.getItem("sabado-zoom-link") &&
      !localStorage.getItem("sabado-youtube-link") &&
      !localStorage.getItem("domingo-zoom-link") &&
      !localStorage.getItem("domingo-zoom-link")
    ) {
      localStorage.setItem("sabado-zoom-link", "https://www.zoom.us/");
      localStorage.setItem("sabado-youtube-link", "https://www.youtube.com/");
      localStorage.setItem("domingo-zoom-link", "https://www.zoom.us/");
      localStorage.setItem("domingo-youtube-link", "https://www.youtube.com/");
    }
  }, []);

  return (
    <div className="footer">
      <div className="footer-1" style={{ marginRight: 15 }}>
        <header>
          <p>Sábado</p>
          <img
            onClick={() =>
              window.open(
                localStorage.getItem("sabado-zoom-link") ||
                  "https://www.zoom.us/"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          />
          <img
            onClick={() =>
              window.open(
                localStorage.getItem("sabado-youtube-link") ||
                  "https://www.youtube.com/"
              )
            }
            src={icon_youtube}
            alt="icon youtube"
          />
        </header>
        <div>
          <p>Sessão de Liderança</p>
          <p>Sessão dos Adultos</p>
        </div>
      </div>

      <div className="footer-2" style={{ marginLeft: 15 }}>
        <header>
          <p>Domingo</p>
          <img
            onClick={() =>
              window.open(
                localStorage.getItem("domingo-zoom-link") ||
                  "https://www.zoom.us/"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          />
          <img
            onClick={() =>
              window.open(
                localStorage.getItem("domingo-youtube-link") ||
                  "https://www.youtube.com/"
              )
            }
            src={icon_youtube}
            alt="icon youtube"
          />
        </header>
        <div>
          <p>Sessão Geral - Aracati</p>
          <p>Sessão Geral - Pacajus</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
