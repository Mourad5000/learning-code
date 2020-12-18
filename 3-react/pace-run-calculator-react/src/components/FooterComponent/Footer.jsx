import React from "react";
import "./Footer.css";
//linkear la imagen con <Link> como si fuese un ancore (buscar por internet)

import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <footer className="pb-2 pt-3 footer">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <p className="mb-1">
                Un buen atleta es un atleta calculador! ...y recuerda; el mejor
                ritmo es aquel incómodamente cómodo.{" "}
              </p>
              <hr />
              <p className="blockquote-footer mb-2 text-white">
                ® 2020 Mourad Mounim Naaman. All Rights Reserved.
              </p>
              <a href="https://www.linkedin.com/in/mourad-mounim-naaman-493467101/">
                <img src={linkedin} alt="Perfil de Linkedin" />
              </a>
              <a href="https://www.instagram.com/mourad5000/">
                <img src={instagram} alt="Perfil de Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
