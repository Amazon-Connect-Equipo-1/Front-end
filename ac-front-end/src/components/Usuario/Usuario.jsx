import "../../styles/Usuario/Usuario.css";
import logo from"../../images/logo_bbva.png"; 

const Usuario =(props)=>{
    return(
        
        <div className="usuario-contenedor">
            <img className="usuario-imagen" src= {logo}/>
            <div className="usuario-chatbot-contenedor">
                <div className="usuario-chatbot">
                    <div>
                    <span>
                        <span className="usuario-chatbot"></span>
                        <button className="usuario-llamada">
                            <p className="usuario-texto">
                                Call
                            </p>
                        </button>
                    </span>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
};
export default Usuario;