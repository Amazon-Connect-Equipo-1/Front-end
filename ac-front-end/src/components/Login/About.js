/* 
Login.js

Authors:
-Jared Abraham Flores Guarneros A01379868

Creation date: 26/05/2022
Last modification date: 11/06/2022

Program that displays the organization information
*/

import "../../styles/Login/Login.css";
import logo from "../../images/logo_bbva.png";
import Alvaro from "../../images/Collabs/Alvaro.jpg";
import Ariel from "../../images/Collabs/Ariel.jpg";
import Humberto from "../../images/Collabs/Humberto.jpg";
import Julio from "../../images/Collabs/Julio.jpg";
import Roberto from "../../images/Collabs/Roberto.jpg";
import Victor from "../../images/Collabs/Victor.jpg";
import Isra from "../../images/Collabs/Isra.jpg";
import Jared from "../../images/Collabs/Jared.jpg";
import AriadnaH from "../../images/Collabs/AriadnaH.jpg";
import Liam from "../../images/Collabs/Liam.jpg";
import David from "../../images/Collabs/David.jpg";
import ErickH from "../../images/Collabs/Victor.jpg";
import Mike from "../../images/Collabs/Mike.jpg";
import Dany from "../../images/Collabs/Dany.jpg";
import Jorge from "../../images/Collabs/Victor.jpg";
import Amy from "../../images/Collabs/Victor.jpg";
import AriadnaJ from "../../images/Collabs/Victor.jpg";
import ErickB from "../../images/Collabs/Erick.jpg";
import Edna from "../../images/Collabs/Edna.jpg";
import Luis from "../../images/Collabs/Victor.jpg";
import Diego from "../../images/Collabs/Diego.jpg";
import Sara from "../../images/Collabs/Sara.jpg";
import Acosta from "../../images/Collabs/Victor.jpg";
import Rebeca from "../../images/Collabs/Victor.jpg";
import Eduardo from "../../images/Collabs/Victor.jpg";
import Raul from "../../images/Collabs/Victor.jpg";

import LoginForm from "./LoginForm";

const About = (props) => {
  return (
    <div className="log-about-container">
      <h1>Development Team</h1>
      <p>Collaborating teachers</p>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={Alvaro} className="log-img" />

          <p>Alvaro Hernandez Quijano</p>
        </div>
        <div className="log-img-container">
          <img src={Victor} className="log-img" />

          <p>Victor Adrian Sosa Hernandez</p>
        </div>
        <div className="log-img-container">
          <img src={Ariel} className="log-img" />

          <p>Ariel Ortiz Ramirez</p>
        </div>
        <div className="log-img-container">
          <img src={Humberto} className="log-img" />

          <p>Humberto Cardenas Anaya</p>
        </div>
        <div className="log-img-container">
          <img src={Julio} className="log-img" />
          <p>Julio Guillermo Arriaga Blumenkron</p>
        </div>
        <div className="log-img-container">
          <img src={Roberto} className="log-img" />

          <p>Roberto Martinez Roman</p>
        </div>
      </div>
      <h1> Project Managers</h1>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={Isra} className="log-img" />
          <p>Project Manager in charge of BackEnd</p>
          <p>Israel Sanchez Miranda</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/israel-sánchez-miranda-269225229 "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Jared} className="log-img" />
          <p>Project Manager in charge of FrontEnd</p>
          <p>Jared Abraham Flores Guarneros</p>

          <a className="ref-color" href="mailto:A01379868@tec.mx">
            A01379868@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/jared-abraham-flores-guarneros-5515a0191/ "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Liam} className="log-img" />
          <p>Project Manager in charge of AWS</p>
          <p>Liam Garay Monroy</p>

          <a className="ref-color" href="mailto:A01750632@tec.mx">
            A01750632@tec.mx
          </a>
        </div>
        <div className="log-img-container">
          <img src={AriadnaH} className="log-img" />
          <p>Project Manager in charge of Documentation</p>
          <p>Arianda Huesca Coronado</p>

          <a className="ref-color" href="mailto:A01749161@tec.mx">
            A01749161@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/ariadna-huesca-coronado/ "
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h1>Backend functionality managers</h1>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={David} className="log-img" />
          <p>David Rodiguez Fragoso</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/david-rodriguez-fragoso-6393b8230/ "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={ErickH} className="log-img" />
          <p>Erick Hernandez Silva</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/erickhernandezsilva "
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h2>Backend work team</h2>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={Eduardo} className="log-img" />
          <p>Eduardo Rodriguez Lopez</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/eduardo-rodr%C3%ADguez-l%C3%B3pez-95726b1a3/"
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Raul} className="log-img" />
          <p>Raul Youthan Irigoyen Osorio</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/youthan-irigoyen "
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h1>Frontend functionality managers</h1>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={Mike} className="log-img" />
          <p>Miguel Angel Perez Lopez</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/miguel-perez-maikndustries/ "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Dany} className="log-img" />
          <p>Daniel Garcia Barajas</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/daniellgarciabarajas/ "
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h2>Frontend work team</h2>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={AriadnaJ} className="log-img" />
          <p>Ariadna Jocelyn Guzman Jimenez</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/ariadnajguzman "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Amy} className="log-img" />
          <p>Amy Murakami Tsutsumi</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/amymurakami"
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Jorge} className="log-img" />
          <p>Jorge Chavez Badillo</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/jorge-chavez-badillo/ "
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h1>AWS functionality managers</h1>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={ErickB} className="log-img" />
          <p>Erick Alberto Bustos Cruz</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a className="ref-color" href="https://www.linkedin.com/in/erbustos/">
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Diego} className="log-img" />
          <p>Diego Alejandro Juarez Ruiz</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="www.linkedin.com/in/diego-alejandro-juarez-ruiz"
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Edna} className="log-img" />
          <p>Edna Jacqueline Zavala Ortega</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/jacqueline-zavala-620a20241"
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Luis} className="log-img" />
          <p>Luis Enrique Zamarripa Marin</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/luis-zamarripa/"
          >
            LinkedIn
          </a>
        </div>
      </div>{" "}
      <h1>Documentation managers</h1>
      <div className="log-row-container">
        <div className="log-img-container">
          <img src={Sara} className="log-img" />
          <p>Claudia Sarahi Armenta Maya</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/sarahiarmenta "
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Rebeca} className="log-img" />
          <p>Rebeca Rojas Perez</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
          <a
            className="ref-color"
            href="https://www.linkedin.com/in/rebeca-rojas-pérez-288b30191/"
          >
            LinkedIn
          </a>
        </div>
        <div className="log-img-container">
          <img src={Acosta} className="log-img" />
          <p>Eduardo Acosta Hernandez</p>

          <a className="ref-color" href="mailto:A01378705@tec.mx">
            A01378705@tec.mx
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
