import React from "react";
import { useForm } from "react-hook-form";
import {axios} from "axios";
import './Registration.css';



const Registration = ()=>{
    async function saveUser(data){
        await fetch("http://case.ua/user-register.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:  JSON.stringify(data)
        })
            .then(res => res.text())
            .then(data => {
                console.log(data)
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
            <form action="" className="reg__form" onSubmit={handleSubmit(saveUser)}>
                <h1>Реєстрація нового користувача в системі</h1>
                <div className="reg__block">
                    <label>ПІБ {errors?.userName && <span className="error__mes">{errors?.userName?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="text" {...register("userName" ,{required:true,minLength:{value:3,message:"Мінімум 3 символа"}})}/>
                    
                </div>
                <div className="reg__block">
                    <label>Номер телефону {errors?.userPhone && <span className="error__mes">{errors?.userPhone?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="text" {...register("userPhone", {value:"+380"} ,{required:"",minLength:{value:10,message:"Мінімум 10 символа"}})} />
        
                </div>
                <div className="reg__block">
                    <label>E-mail {errors?.userEmail && <span className="error__mes">{errors?.userEmail?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="email" {...register("userEmail",{required:true,minLength:{value:5,message:"Мінімум 5 символа"}})} />
                    
                </div>
                <div className="reg__block">
                    <label>Адреса {errors?.userAddress && <span className="error__mes">{errors?.userAddress?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="text" {...register("userAddress",{required:false,minLength:{value:5,message:"Мінімум 5 символа"}})} />
                    
                </div>
                <div className="reg__block">
                    <label>Тип користувача</label>
                    <select {...register("userType")}>
                        <option key={"volunteer"} value={"volunteer"}>Волонтер</option>
                        <option key={"manager"} value={"manager"}>Менеджер</option>
                        <option key={"expert"} value={"expert"}>Залучений спеціаліст</option>
                        <option key={"worker"} value={"worker"}>Працівник</option>
                        <option key={"administrator"} value={"administrator"}>Адміністратор</option>
                    </select>
                </div>
                <div className="reg__block">
                    <label>Спеціалізація {errors?.userWork && <span className="error__mes">{errors?.userWork?.message || "Обов'язково до заповнення"}</span>}</label>
                    <input type="text" {...register("userWork",{required:true,minLength:{value:3,message:"Мінімум 3 символа"}})} />
                    
                </div>
                <div className="reg__block">
                    <label>Інші необхідні дані {errors?.userAnotherData && <span className="error__mes">{errors?.userAnotherData?.message || "Обов'язково до заповнення"}</span>}</label>
                    <textarea cols="30" rows="10" {...register("userAnotherData",{required:false,minLength:{value:3,message:"Мінімум 3 символа"}})}></textarea>
    
                    </div>
                <div className="reg__block">
                    <label></label>
                    <button className={`primary__btn ${!isValid ? 'active' : ""}`} disabled={!isValid}>Реєстрація</button>
                </div>
            </form>
         
        </div>
    )
}
export default Registration;