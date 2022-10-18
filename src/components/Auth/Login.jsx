import React, { useState } from "react";
import ForgotPass from "./ForgotPass";
import LoginForm from "./LoginForm";
import Registration from "./Registration";

import './Registration.css';


const Login = ()=>{
    const [selected, setSelected] = useState({
        show:true,
        register: "",
        auth: "active",
        forgot: ""
    });
    const [forgot, setForgot] = useState(false);
 
    return !forgot ?(
        <div className="reg__container">
            <div className="reg__menu">
                <div className={`reg__menu__item ${selected.auth}`} onClick={()=>{setSelected({
                           show:true,
                           register: "",
                           auth: "active" ,
                           forgot: ""
                })}}>Авторизація</div>
                <div className="reg__menu__item__znak">|</div>
                <div className={`reg__menu__item ${selected.register}`} onClick={()=>{setSelected({
                           show:false,
                           register: "active",
                           auth: "" ,
                           forgot:""
                })}}>Реєстрація</div>
            </div>
            <LoginForm show = {selected.show}/>
            <Registration show = {!selected.show}/>
            <div>
                <p>Забули пароль - <b onClick={()=>{
                    setForgot(true);
                }}>Відновити</b></p>
            </div>
        </div>
    ):(
        <ForgotPass />
    )
}
export default Login;