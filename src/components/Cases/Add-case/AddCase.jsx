import React from "react";
import PrimaryBtn from "../../Buttons/Primary";
import { useForm } from "react-hook-form";
import s from "./AddCase.module.css";

const send = async(data)=>{
    console.log(data);
    data.userId = localStorage.getItem("id");
    await fetch("http://case.ua/add-first-case.php",{
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
}
const AddCase = ()=>{
    const Input = ({value,label, register, name, required, type, minLength})=>{
        return(
            <>
                <label className={s.label}>{label}</label>
                <input type={type} className={s.input__text} {...register(name ,{required:required, minLength, value:value})}/>
                
            </>
        )
    }

    
    const {register,formState:{errors},handleSubmit} = useForm({mode:'onSubmit'});


    const sendCase = (data)=>{
        send(data);
    }
    return(
        <div className={s.add__case}>
            <form className={s.form__add__case} onSubmit={handleSubmit(sendCase)}>
                <h1 className={s.header__text}>Додати кейс</h1>

                <div className={s.section__form}>
                <Input type="text" label={"ПІБ"} name={"caseName"} register={register} minLength={{value:5,message:"Мінімум 5 символів"}} required="Обов'язково до заповнення"/>
                <div className={s.error__message}>{errors?.caseName && <p>{errors?.caseName?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <Input value="+380" type="text" label="Номер телефону" name="phone1" register={register} minLength={{value:10,message:"Міннімум 10 символів"}} required="Обов'язково до заповнення"/>
                <div className={s.error__message}>{errors?.phone1 && <p>{errors?.phone1?.message || "Обов'язково"}</p>}</div>
               </div>
                
               <div className={s.section__form}>
                <Input type="text" label={"Номер телефону"} name={"phone2"} register={register} minLength={{value:10,message:"Міннімум 10 символів"}} required={false}/>
                <div className={s.error__message}>{errors?.phone2 && <p>{errors?.phone2?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <Input type="email" label={"E-mail"} name={"email"} register={register} minLength={{value:3,message:"Міннімум 10 символів"}} required={false}/>
                <div className={s.error__message}>{errors?.email && <p>{errors?.email?.message || "Обов'язково"}</p>}</div>
               </div>


               <div className={s.section__form}>
                <Input type="text" label={"Адреса"} name={"address"} register={register} minLength={{value:10,message:"Міннімум 10 символів"}} required={false}/>
                <div className={s.error__message}>{errors?.address && <p>{errors?.address?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <Input type="text" label={"Канал комунікації"} name={"chanel"} register={register} minLength={{value:1,message:"Міннімум 1 символів"}} required={false}/>
                <div className={s.error__message}>{errors?.chanel && <p>{errors?.chanel?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <Input type="text" label={"Потреба"} name={"potreba"} register={register} minLength={{value:5,message:"Міннімум 5 символів"}} required={true}/>
                <div className={s.error__message}>{errors?.potreba && <p>{errors?.potreba?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <Input type="text" label={"Надано допомогу"} name={"givingHelp"} register={register} minLength={{value:5,message:"Міннімум 5 символів"}} required={false}/>
                <div className={s.error__message}>{errors?.givingHelp && <p>{errors?.givingHelp?.message || "Обов'язково"}</p>}</div>
               </div>

               <div className={s.section__form}>
                <div>
                    <label htmlFor="category">Категорія кейсу</label>
                </div>
                <div className={s.form__category}>
                    <div className={s.form__category__block}>
                        <label htmlFor="orphans">Сирота</label>
                        <input {...register("category")} type="checkbox" id="orphans" value="orphans" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="internat">У інтернаті</label>
                        <input {...register("category")} type="checkbox" id="internat" value="internat" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="szho">СЖО</label>
                        <input {...register("category")} type="checkbox" id="szho" value="szho" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="ps">Прийомна сім'я</label>
                        <input {...register("category")} type="checkbox" id="ps" value="ps" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="dbst">ДБСТ</label>
                        <input {...register("category")} type="checkbox" id="dbst" value="dbst" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="bagatoditna">Багатодітна сім'я</label>
                        <input {...register("category")} type="checkbox" id="bagatoditna" value="bagatoditna" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="invalidnist">З інвалідністю</label>
                        <input {...register("category")} type="checkbox" id="invalidnist" value="invalidnist" />
                    </div>
                    <div className={s.form__category__block}>
                        <label htmlFor="vpo">ВПО</label>
                        <input {...register("category")} type="checkbox" id="vpo" value="vpo" />
                    </div>

                </div>
                </div>
                
                <div>
                    <PrimaryBtn name="Зберегти" />
                </div>
            </form>
            
        </div>
    )
}


export default AddCase;