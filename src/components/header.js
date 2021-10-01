import React from "react";

// css
import "../styles/header.css";

// icon
import PersonIcon from '../assets/icons/person.svg'

function header() {
  return (
    <div className="app-header">
      <p>
        Conferência Semestral da <b>Estaca Pacajus Brasil de Sião</b>
      </p>

      <div className="app-header__elder">
        <div><img src={PersonIcon} alt="Icon person" /><p>?</p></div>

        <section>
          <p>Presidida pelo Élder...</p>
          <h5>Setenta de Área</h5>
        </section>
      </div>
    </div>
  );
}

export default header;
