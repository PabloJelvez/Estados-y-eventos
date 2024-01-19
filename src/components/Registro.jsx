import { useState } from "react";

import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Registro = () =>{
    const [alert, setAlert] = useState({ error: "", msg: "", color:"" });
    return(
        <>
        <div className="container  border border-light-subtle rounded-5 bg-warning p-5">
            <h1 className="fs-1">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center my-3"> 
            <SocialButton icon="fa-brands fa-facebook" link="https://web.facebook.com/jelvez/?locale=es_LA"/>
            <SocialButton icon="fa-brands fa-github"link="https://github.com/PabloJelvez"/>
            <SocialButton icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/pablo-j%C3%A9lvez/" />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </div>
      
        </>

    );
};
export default Registro;