/* 
Login.js

Authors:
-Jared Abraham Flores Guarneros A01379868

Creation date: 26/05/2022
Last modification date: 11/06/2022

Program that displays the organization information
*/

import "../../styles/Login/About.css";
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
import ErickH from "../../images/Collabs/ErikH.jpg";
import Mike from "../../images/Collabs/Mike.jpg";
import Dany from "../../images/Collabs/Dany.jpg";
import Jorge from "../../images/Collabs/Jorge.jpg";
import Amy from "../../images/Collabs/Amy.jpg";
import AriadnaJ from "../../images/Collabs/AriadnaJ.jpg";
import ErickB from "../../images/Collabs/Erick.jpg";
import Edna from "../../images/Collabs/Edna.jpg";
import Luis from "../../images/Collabs/Luis.jpg";
import Diego from "../../images/Collabs/Diego.jpg";
import Sara from "../../images/Collabs/Sara.jpg";
import Acosta from "../../images/Collabs/Acosta.jpg";
import Rebeca from "../../images/Collabs/Rebeca.jpg";
import Eduardo from "../../images/Collabs/Eduardo.jpg";
import Raul from "../../images/Collabs/Raul.jpg";
import bk from "../../images/Collabs/logo.jpg";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="abo-main-container">
      <Link
        to={"../login"}
        className="abo-btn"
        style={{ width: "8rem" }}
        onClick={props.onChangeShow}
      >
        return
      </Link>
      <div className="abo-about-container">
        <div className="abo-card">
          <img className="abo-logo" src={bk}></img>
          <h1 className="abo-main-title">Bankonnect</h1>
          <h1 className="abo-sub-title">Development Team</h1>
        </div>

        <div className="abo-contain">
          <p className="abo-title">Collaborating teachers</p>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Alvaro} className="abo-img" />

              <p className="abo-text">Alvaro Hernandez Quijano</p>
            </div>
            <div className="abo-img-container">
              <img src={Victor} className="abo-img" />

              <p className="abo-text">Victor Adrian Sosa Hernandez</p>
            </div>
            <div className="abo-img-container">
              <img src={Ariel} className="abo-img" />

              <p className="abo-text">Ariel Ortiz Ramirez</p>
            </div>
          </div>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Humberto} className="abo-img" />

              <p className="abo-text">Humberto Cardenas Anaya</p>
            </div>
            <div className="abo-img-container">
              <img src={Julio} className="abo-img" />
              <p className="abo-text">Julio Guillermo Arriaga Blumenkron</p>
            </div>
            <div className="abo-img-container">
              <img src={Roberto} className="abo-img" />

              <p className="abo-text">Roberto Martinez Roman</p>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h1 className="abo-title"> Project Managers</h1>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Isra} className="abo-img" />
              <p className="abo-text-large">
                Project Manager in charge of BackEnd
              </p>
              <p className="abo-text">Israel Sanchez Miranda</p>

              <a className="abo-text" href="mailto:A01378705@tec.mx">
                A01378705@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/israel-sánchez-miranda-269225229 "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Jared} className="abo-img" />
              <p className="abo-text-large">
                Project Manager in charge of FrontEnd
              </p>
              <p className="abo-text">Jared Abraham Flores Guarneros</p>

              <a className="abo-text" href="mailto:A01379868@tec.mx">
                A01379868@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/jared-abraham-flores-guarneros-5515a0191/ "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Liam} className="abo-img" />
              <p className="abo-text-large">Project Manager in charge of AWS</p>
              <p className="abo-text">Liam Garay Monroy</p>

              <a className="abo-text" href="mailto:A01750632@tec.mx">
                A01750632@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/liam-garay-9ba31722b "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={AriadnaH} className="abo-img" />
              <p className="abo-text-large">
                Project Manager in charge of Documentation
              </p>
              <p className="abo-text">Arianda Huesca Coronado</p>

              <a className="abo-text" href="mailto:A01749161@tec.mx">
                A01749161@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/ariadna-huesca-coronado/ "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h1 className="abo-title">Backend functionality managers</h1>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={David} className="abo-img" />
              <p className="abo-text-large">ThirdParty services module</p>
              <p className="abo-text">David Rodiguez Fragoso</p>

              <a className="abo-text" href="mailto:A01748760@tec.mx">
                A01748760@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/david-rodriguez-fragoso-6393b8230/ "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={ErickH} className="abo-img" />
              <p className="abo-text-large">Email notification service</p>
              <p className="abo-text">Erick Hernandez Silva</p>

              <a className="abo-text" href="mailto:A01750170@tec.mx">
                A01750170@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/erickhernandezsilva "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h2 className="abo-title">Backend work team</h2>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Eduardo} className="abo-img" />
              <p className="abo-text-large">Documentation</p>
              <p className="abo-text">Eduardo Rodriguez Lopez</p>

              <a className="abo-text" href="mailto:A01749381@tec.mx">
                A01749381@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/eduardo-rodr%C3%ADguez-l%C3%B3pez-95726b1a3/"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Raul} className="abo-img" />
              <p className="abo-text-large">Documentation</p>
              <p className="abo-text">Raul Youthan Irigoyen Osorio</p>

              <a className="abo-text" href="mailto:A01750476@tec.mx">
                A01750476@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/youthan-irigoyen "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h1 className="abo-title">Frontend functionality managers</h1>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Mike} className="abo-img" />
              <p className="abo-text-large">Development of interfaces</p>
              <p className="abo-text">Miguel Angel Perez Lopez</p>

              <a className="abo-text" href="mailto:A01750145@tec.mx">
                A01750145@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/miguel-perez-maikndustries/ "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Dany} className="abo-img" />
              <p className="abo-text-large">Design and testing</p>
              <p className="abo-text">Daniel Garcia Barajas</p>

              <a className="abo-text" href="mailto:A01378688@tec.mx">
                A01378688@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/daniellgarciabarajas/ "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h2 className="abo-title">Frontend work team</h2>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={AriadnaJ} className="abo-img" />
              <p className="abo-text-large">
                Dashboard creation, documentation
              </p>
              <p className="abo-text">Ariadna Jocelyn Guzman Jimenez</p>

              <a className="abo-text" href="mailto:A01749373@tec.mx">
                A01749373@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/ariadnajguzman "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Amy} className="abo-img" />
              <p className="abo-text-large">Tutorials, documentation</p>
              <p className="abo-text">Amy Murakami Tsutsumi</p>

              <a className="abo-text" href="mailto:A01750185@tec.mx">
                A01750185@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/amymurakami"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Jorge} className="abo-img" />
              <p className="abo-text-large">
                System translation, documentation
              </p>
              <p className="abo-text">Jorge Chavez Badillo</p>

              <a className="abo-text" href="mailto:A01749448@tec.mx">
                A01749448@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/jorge-chavez-badillo/ "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h1 className="abo-title">AWS functionality managers</h1>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={ErickB} className="abo-img" />
              <p className="abo-text-large">Video data processing</p>
              <p className="abo-text">Erick Alberto Bustos Cruz</p>

              <a className="abo-text" href="mailto:A01378966@tec.mx">
                A01378966@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/erbustos/"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Diego} className="abo-img" />
              <p className="abo-text-large">Screen recording, voice ID</p>
              <p className="abo-text">Diego Alejandro Juarez Ruiz</p>

              <a className="abo-text" href="mailto:A01379566@tec.mx">
                A01379566@tec.mx
              </a>
              <a
                className="abo-text"
                href="www.linkedin.com/in/diego-alejandro-juarez-ruiz"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Edna} className="abo-img" />
              <p className="abo-text-large">Screen recording, voice ID</p>
              <p className="abo-text">Edna Jacqueline Zavala Ortega</p>

              <a className="abo-text" href="mailto:A01750480@tec.mx">
                A01750480@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/jacqueline-zavala-620a20241"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Luis} className="abo-img" />
              <p className="abo-text-large">Video processing</p>
              <p className="abo-text">Luis Enrique Zamarripa Marin</p>

              <a className="abo-text" href="mailto:A01379918@tec.mx">
                A01379918@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/luis-zamarripa/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="abo-contain">
          <h1 className="abo-title">Documentation managers</h1>
          <div className="abo-row-container">
            <div className="abo-img-container">
              <img src={Sara} className="abo-img" />
              <p className="abo-text-large">Test reports, test plans</p>
              <p className="abo-text">Claudia Sarahi Armenta Maya</p>

              <a className="abo-text" href="mailto:A01378067@tec.mx">
                A01378067@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/sarahiarmenta "
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Rebeca} className="abo-img" />
              <p className="abo-text-large">Wiki, documentation</p>
              <p className="abo-text">Rebeca Rojas Perez</p>

              <a className="abo-text" href="mailto:A01751192@tec.mx">
                A01751192@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/rebeca-rojas-pérez-288b30191/"
              >
                LinkedIn
              </a>
            </div>
            <div className="abo-img-container">
              <img src={Acosta} className="abo-img" />
              <p className="abo-text-large">Wiki, documentation</p>
              <p className="abo-text">Eduardo Acosta Hernandez</p>

              <a className="abo-text" href="mailto:A01375206@tec.mx">
                A01375206@tec.mx
              </a>
              <a
                className="abo-text"
                href="https://www.linkedin.com/in/eduardo-acosta-4977ba15b/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
