import React from "react";
import PrimaryBtn from "../../Buttons/Primary";

import s from "./AddCase.module.css";



const AddCase = ()=>{
    function checkData(){
        console.log()
    }
    return(
        <div className={s.add__case}>
            <form className={s.form__add__case}>
                <h1 className={s.header__text}>Додати кейс</h1>
                <FormCaseInput type = "text" label="Назва кейсу"/>
                <FormCaseInput type = "number" label="Телефон 1"/>
                <FormCaseInput type = "number" label="Телефон 2"/>
                <FormCaseInput type = "email" label="E-mail"/>
                <FormCaseInput type = "text" label="Адреса"/>
                
                <div className={s.section__form}>
                    <label className={s.label}>Канал комунікації</label>
                    <select className={s.select}>
                        <option>Viber</option>
                        <option>Telegram</option>
                        <option>Messenger</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                    </select>
                </div>
                <FormCaseInput type = "text" label="Потреба"/>
                <div className={s.section__form}>
                    <label className={s.label}>Статус</label>
                    <select className={s.select}>
                        <option>Перший контакт</option>
                        <option>У роботі</option>
                        <option>Відмова</option>
                        <option>Завершено</option>
                        <option>Зупинено</option>
                        <option>Передано у іншу організацію</option>
                    </select>
                </div>
                <div>
                    <PrimaryBtn name="Зберегти" click={test}/>
                </div>
            </form>
            
        </div>
    )
}

const FormCaseInput = (props)=>{
    return (
        <div className={s.section__form}>
            <label className={s.label}>{props.label}</label>
            <input type={props.type} className={s.input__text}/>
        </div>
    )
}
const test = function  (params) {
    console.log("Hello")
}
export default AddCase;