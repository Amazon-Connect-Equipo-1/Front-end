import "../../styles/Usuario/Usuario.css";
import "../../images/logo_bbva.png" 
const Usuario =(props)=>{
    return(
        
        <div className="usuario-contenedor">
            <div className="usuario-chatbot-contenedor">
                <div className="usuario-chatbot">
                    <div>
                    <span>
                        <span className="usuario-chatbot"></span>
                        <span className="usuario-llamada">
                            <h1 className="usuario-texto">
                                Call
                            </h1>
                        </span>
                    </span>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
};
export default Usuario;