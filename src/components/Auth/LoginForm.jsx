import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Slices/userSlice";

import './Registration.css';


const LoginForm = ({show})=>{
    const dispatch = useDispatch();
    async function getUser(data){
        await fetch("http://case.ua/login.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:  JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                
                localStorage.setItem("token", data.token)
                localStorage.setItem("email", data.email)
                localStorage.setItem("id", data.id)
                localStorage.setItem("userName", data.userName)
                localStorage.setItem("data", JSON.stringify(data.data))
               dispatch(setUser({
                    email:data.email,
                    id: data.id,
                    token: data.token,
                    data:data,
                    userName:data.userName
                }))

                window.location.href ="/"
            })
            .catch(rejected => {
                console.log(rejected);
            });
            reset()
           
    }
    const {register,formState:{errors,isValid},handleSubmit,reset} = useForm({mode:'onChange'});
 
    return show ?(
        
            <form action="" className="reg__form" onSubmit={handleSubmit(getUser)}>
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
         
       
    ):(
        <></>
    )
}
export default LoginForm;