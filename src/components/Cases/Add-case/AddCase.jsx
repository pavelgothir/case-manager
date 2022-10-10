import React, {useState, useEffect} from "react";
import axios from "axios";
import {serverAddres} from "./../../Functions/serverAddres";
import "./add-case.css";

let categoriesStr = "";
let masCategories = [];
const send = async(data)=>{
    
    data.userId = localStorage.getItem("id");
    console.log(data);
    await fetch(serverAddres("add-first-case.php"),{
        method:"POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        body:  JSON.stringify(data)
    })
        .then(res => res.text())
        .then(data => {
            console.log(data)
           // alert("Кейс успішно створено")
        })
        .catch(rejected => {
            console.log(rejected);
        });
}
function checkAddCase(){
    let errors = 0;
    let objAddCase = {
        surname: document.querySelector("#surname").value.replace("'", "’"),
        firstName: document.querySelector("#firstName").value.replace("'", "’"),
        secondName: document.querySelector("#secondName").value.replace("'", "’"),
        phone1: document.querySelector("#phone1").value.replace("'", "’"),
        phone2: document.querySelector("#phone2").value.replace("'", "’"),
        email: document.querySelector("#email").value.replace("'", "’"),
        addressPropiska: document.querySelector("#addressPropiska").value.replace("'", "’").replace(/\n/g, "<br />"),
        addressLive: document.querySelector("#addressLive").value.replace("'", "’").replace(/\n/g, "<br />"),
        chanelComunity: document.querySelector("#chanelComunity").value.replace("'", "’"),
        firstContact: document.querySelector("#firstContact").value.replace("'", "’"),
        familyStan: document.querySelector("#familyStan").value.replace("'", "’"),
        potreba: document.querySelector("#potreba").value.replace("'", "’").replace(/\n/g, "<br />"),
        commentar: document.querySelector("#commentar").value.replace("'", "’").replace(/\n/g, "<br />"),
        dateDogovir: document.querySelector("#dateDogovir").value.replace("'", "’"),
        numberDogovir: document.querySelector("#numberDogovir").value.replace("'", "’"),
        categories:[]
    }
    let checkboxCategory = document.querySelectorAll(".checkbox__category");
    let checkboxCategoryLabel = document.querySelectorAll(".checkbox__category__label");
    let checkboxCategoryHidden = document.querySelectorAll(".checkbox__category__hidden");
    for(let i = 0; i < checkboxCategory.length; i++){
        if(checkboxCategory[i].checked){
            let obj = {
                value: checkboxCategory[i].value,
                text: checkboxCategoryLabel[i].innerText,
                color:checkboxCategoryHidden[i].value
            }
           objAddCase.categories.push(obj);
        }
    }
    
    if(objAddCase.surname.length < 1){
        document.getElementById("surname").parentElement.style.background = "red";
        errors += "<p>Заповніть поле <b>Прізвище</b></p>"
    }else {
        document.getElementById("surname").parentElement.style.background = "white"
    }
    if(objAddCase.firstName.length < 1){
        document.getElementById("firstName").parentElement.style.background = "red"
        errors += "<p>Заповніть поле <b>Ім'я</b></p>"
    }else {
        document.getElementById("firstName").parentElement.style.background = "white"
    }
    if(objAddCase.phone1.length < 1){
        document.getElementById("phone1").parentElement.style.background = "red"
        errors += "<p>Заповніть поле <b>Телефон 1</b></p>"
    }else {
        document.getElementById("phone1").parentElement.style.background = "white"
    }
    if(objAddCase.firstContact.length < 1){
        document.getElementById("firstContact").parentElement.style.background = "red"
        errors += "<p>Заповніть поле <b>Дата першого контакту</b></p>"
    }else {
        document.getElementById("firstContact").parentElement.style.background = "white"
    }
    if(objAddCase.categories.length == 0){
        document.getElementsByClassName("add__case__name__of__block")[0].style.background = "red"
        errors += "<p>Оберіть <b>категорію кейсу</b></p>"
    }else {
        document.getElementsByClassName("add__case__name__of__block")[0].style.background = "white"
    }
    if(errors.length > 1){
        document.getElementById("addCaseErrors").innerHTML = errors;
        return document.getElementById("add__case__modal").classList.add("active")
    }
   //objAddCase.categories = JSON.stringify(objAddCase.categories)
   //return console.log(objAddCase)
    send(objAddCase);
}
const AddCase = ()=>{
    const [categoriesCase, setCategoriesCase] = useState(false)
    useEffect(()=>{
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres("manage/get-categories-case.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
           console.log(data.data)
           setCategoriesCase(data.data);
           //masCategories = data.data;
          // window.location.reload()        
        })
        .catch((error)=>console.log(error)) 
    },[])
    const CategoriesData = ({category, index})=>{

        return (
            <div className="add__case__item__inner__category__item">
                <input className="checkbox__category" type="checkbox" value={category.value} id={`cat${index}`} />
                <label className="checkbox__category__label" htmlFor={`cat${index}`}>{category.text}</label>
                <input type="hidden" className="checkbox__category__hidden" value={category.color}/>
            </div>
    
        )
    }
    const CategoriesMas = (pos, lf)=>{
        
        if(pos.length < 1 || pos == false) return;
                categoriesStr =  pos.map((post,index)=>{
                return <CategoriesData lf={lf} key={index} category={post} index={index}/>
        })  
    }  
    return(
        <div className="wrap__add__case">
        <div className="add__case__inner">
            <div className="add__case__line">
                <div className="add__case__line__three">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="surname">Прізвище <span className="color__red">*</span></label>
                            <input type="text" id="surname" name="surname"/>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="firstName">Ім'я <span className="color__red">*</span></label>
                            <input type="text" id="firstName" name="firstName"/>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="secondName">По батькові</label>
                            <input type="text" id="secondName" name="secondName"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__three">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="phone1">Номер телефону 1 <span className="color__red">*</span></label>
                            <input type="text" id="phone1" name="phone1"/>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="phone2">Номер телефону 2</label>
                            <input type="text" id="phone2" name="phone2"/>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__two">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="addressPropiska">Адреса по прописці</label>
                            <textarea name="addressPropiska" id="addressPropiska" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="addressLive">Адреса фактичного проживання</label>
                            <textarea name="addressLive" id="addressLive" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__three">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="chanelComunity">Канал комунікації</label>
                            <input type="text" id="chanelComunity" name="chanelComunity" />
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="firstContact">Дата першого контакту <span className="color__red">*</span></label>
                            <input type="date" id="firstContact" name="firstContact" />
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="familyStan">Сімейний стан</label>
                            <input type="text" id="familyStan" name="familyStan"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__one">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="potreba">Потреба, запит</label>
                            <textarea name="potreba" id="potreba" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__two">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="" className="add__case__name__of__block">Категорія кейсу <span className="color__red">*</span></label>
                            <div className="add__case__item__inner__category">
                                {CategoriesMas(categoriesCase)}
                                {categoriesStr}
                            </div>
                        </div>
                    </div>
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="" className="add__case__name__of__block">Договір</label>
                            <div className="add__case__item__inner__input__item">
                                <label htmlFor="dateDogovir">Дата підписання договору</label>
                                <input type="date" name="dateDogovir" id="dateDogovir" />
                            </div>
                            <div className="add__case__item__inner__input__item">
                                <label htmlFor="numberDogovir">Номер договору</label>
                                <input type="text" name="numberDogovir" id="numberDogovir" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <div className="add__case__line__one">
                    <div className="add__case__item">
                        <div className="add__case__item__inner__input">
                            <label htmlFor="commentar">Коментар до кейсу</label>
                            <textarea name="commentar" id="commentar" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add__case__line">
                <button onClick={checkAddCase} className="add__case__btn">Додати кейс</button>
            </div>
        </div>
        <div className="add__case__modal" id="add__case__modal">
            <div className="add__case__modal__inner">
                <div id="addCaseErrors"></div>
                <button onClick={()=>{document.getElementById("add__case__modal").classList.remove("active")}}>OK</button>
            </div>
        </div>
    </div>
    )
}


export default AddCase;