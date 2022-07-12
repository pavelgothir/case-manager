import React from "react";
import { useForm } from "react-hook-form";

import './Registration.css';


const Login = ()=>{
    async function getUser(data){
        await fetch("http://case.ua/login.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:  JSON.stringify(data)
        })
            .then(res => res.text())
            .then(data => {
                console.log(data)
               // window.location.href =""
            })
            .catch(rejected => {
                console.log(rejected);
            });
            reset()
            console.log(data)
    }
    const {register,formState:{errors,isValid},handleSubmit,reset} = useForm({mode:'onChange'});
 
    return (
        <div className="reg__container">
            <form action="" className="reg__form" onSubmit={handleSubmit(getUser)}>
                <h1>Авторизація</h1>
                <div className="reg__block">
                    <label>E-mail {errors?.login && <span className="error__mes">{errors?.login?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="email" {...register("login",{required:true,minLength:{value:5,message:"Мінімум 5 символа"}})} />
                </div>
                <div className="reg__block">
                    <label>Пароль {errors?.password && <span className="error__mes">{errors?.password?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="password" {...register("password",{required:true,minLength:{value:5,message:"Мінімум 5 символа"}})} />
                </div>
                
                <div className="reg__block">
                    <label></label>
                    <button className={`primary__btn ${!isValid ? 'active' : ""}`} disabled={!isValid}>Авторизація</button>
                </div>
            </form>
         
        </div>
    )
}
export default Login;