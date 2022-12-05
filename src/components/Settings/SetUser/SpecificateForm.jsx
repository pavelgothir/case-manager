import React, {useState, useEffect} from "react";
import axios from 'axios';
import {serverAddres} from "./../../Functions/serverAddres.js";


let categoriesStr = "";
let masCategories = [];
let categoriesStrContact = "";
let masCategoriesContact = [];
let categoriesStrAccess ="";
let masCategoriesAccess = [];


const SpecificateForm = ({props, active,close}) =>{
    const [categoriesCase, setCategoriesCase] = useState(false);
    const [categoriesContact, setCategoriesContact] = useState(false);
    const [categoriesAccess, setCategoriesAccess] = useState(false);
    
    function saveUserSettings(arg){ 
        console.log(arg)
    
        let specificationObj = {
            ownCab: document.querySelector("#own__cab").checked,
            cases: document.querySelector("#cases").checked,
            addCase: document.querySelector("#add__case").checked,
            contacts: document.querySelector("#contacts").checked,
            searchCasesUsers: document.querySelector("#search__cases__users").checked,
            statistics: document.querySelector("#statistics").checked,
            case: document.querySelector("#case").checked,
            history: document.querySelector("#history").checked,
            reports: document.querySelector("#reports").checked,
            createCase: document.querySelector("#createCase").checked,
            settings: document.querySelector("#settings").checked,
            activeNewUser: document.querySelector("#active__new__users").checked,
            deactivateUsers: document.querySelector("#deactive__users").checked,
            specificationUsers: document.querySelector("#distribution__of__users__rights").checked,
            addEditCategoriesCase: document.querySelector("#add__and__edit__categories__of__cases").checked,
            addEditCategoriesUser: document.querySelector("#add__and__edit__categories__of__users").checked,
            editSomeonesCase: document.querySelector("#edit__someones__case").checked,
            editOwnCase: document.querySelector("#edit__own__case").checked,
            loadCaseFiles: document.querySelector("#loadCaseFiles").checked,
            changeResponsibleCase: document.querySelector("#change__responsible__for__case").checked,
            createIndividualPlan: document.querySelector("#create__individual__plan").checked,
            apiPdfCase: document.querySelector("#api__pdf__case").checked,
            apiUpdateProgram: document.querySelector("#api__update__program").checked,
            yourCases: document.querySelector("#yourCases").checked,
            createContact:document.querySelector("#createContact").checked,
            connectionsCase:document.querySelector("#connectionsCase").checked,
            notesCase:document.querySelector("#notesCase").checked,
            helpesCase:document.querySelector("#helpesCase").checked
        }
        for(let i = 0; i < masCategories.length; i++){
            specificationObj[document.querySelector(`#cat${i}`).value] = document.querySelector(`#cat${i}`).checked;
        }
        for(let i = 0; i < masCategoriesContact.length; i++){
            specificationObj[document.querySelector(`#con${i}`).value] = document.querySelector(`#con${i}`).checked;
        }
        for(let i = 0; i < masCategoriesAccess.length; i++){
            specificationObj[document.querySelector(`#acs${i}`).value] = document.querySelector(`#acs${i}`).checked;
        }
       console.log(specificationObj)
    
    
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            settings: specificationObj,
            userId: arg
        }
        //return console.log(obj)
        axios({
            url: serverAddres("user/set-user-settings.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data.data)
            alert(data.data.message)
            window.location.reload()        
        })
        .catch((error)=>console.log(error)) 
    
    
    
    }

    const FormsSpecificate = ({level})=>{
        console.log(level)
        typeof level === "string" && level.length < 10 ? level = {} : level = JSON.parse(level);
        
        console.log(level)
        return (
            <div className="set__modal__content__wraper">
        <div className="set__modal__content__access__to__pages set__cont">
            <div className="set__modal__content__labels">
            <h3>Доступ до сторінок</h3>
                <label htmlFor="all"><input type= "checkbox" name="all" id="all" className="set__modal__content__common__className"  /> All</label>
                <label htmlFor="own__cab"><input defaultChecked={"ownCab" in level ? level.ownCab : false} type= "checkbox" name="own__cab" id="own__cab" className="set__modal__content__common__className" /> Особистий кабінет</label>
                <label htmlFor="cases"><input defaultChecked={"cases" in level ? level.cases : false} type= "checkbox" name="cases" id="cases" className="set__modal__content__common__className" /> Кейси</label>
                <label htmlFor="add__case"><input defaultChecked={"addCase" in level ? level.addCase : false} type= "checkbox" name="add__case" id="add__case" className="set__modal__content__common__className" /> Додати кейс</label>
                <label htmlFor="contacts"><input defaultChecked={"contacts" in level ? level.contacts : false} type= "checkbox" name="contacts" id="contacts" className="set__modal__content__common__className" /> Контакти</label>
                <label htmlFor="search__cases__users"><input defaultChecked={"searchCasesUsers" in level ? level.searchCasesUsers : false} type= "checkbox" name="search__cases__users" id="search__cases__users" className="set__modal__content__common__className" /> Пошук кейсів і користувачів</label>
                <label htmlFor="statistics"><input defaultChecked={"statistics" in level ? level.statistics : false} type= "checkbox" name="statistics" id="statistics" className="set__modal__content__common__className" /> Статистика</label>
                <label htmlFor="case"><input defaultChecked={"case" in level ? level.case : false} type= "checkbox" name="case" id="case" className="set__modal__content__common__className" /> Кейс</label>
                <label htmlFor="history"><input defaultChecked={"history" in level ? level.history : false} type= "checkbox" name="history" id="history" className="set__modal__content__common__className" /> Історії</label>
                <label htmlFor="reports"><input defaultChecked={"reports" in level ? level.reports : false} type= "checkbox" name="reports" id="reports" className="set__modal__content__common__className" /> Звіти</label>
                <label htmlFor="settings"><input defaultChecked={"settings" in level ? level.settings : false} type= "checkbox" name="settings" id="settings" className="set__modal__content__common__className" /> Settings</label>
            </div>
        </div>
        <div className="set__modal__content__categories__of__cases  set__cont">
            <div className="set__modal__content__labels">
            <h3>Категорії кейсів, які можна створювати</h3>
                        {CategoriesMas(categoriesCase, level)}
                        {categoriesStr}
            </div>
        </div>
        <div className="set__modal__content__categories__of__cases  set__cont">
            <div className="set__modal__content__labels">
            <h3>Категорії контактів, які можна створювати</h3>
                        {CategoriesMasContact(categoriesContact, level)}
                        {categoriesStrContact}
            </div>
        </div>
        <div className="set__modal__content__categories__of__cases  set__cont">
            <div className="set__modal__content__labels">
            <h3>Доступ до кейсів</h3>
                <label htmlFor="yourCases"><input defaultChecked={"yourCases" in level ? level.yourCases : false} type= "checkbox" name="yourCases" id="yourCases" className="set__modal__content__common__className" /> До власних</label>
                        {CategoriesMasAccess(categoriesAccess, level)}
                        {categoriesStrAccess}
            </div>
        </div>
        <div className="set__modal__content__page__settings  set__cont">
           
            <div className="set__modal__content__labels">
            <h3>Сторінка Settings</h3>
                <label htmlFor="active__new__users"><input defaultChecked={"activeNewUser" in level ? level.activeNewUser : false} type="checkbox" name="active__new__users" id="active__new__users" className="set__modal__content__common__className" /> Активація нових користувачів</label>
                <label htmlFor="deactive__users"><input defaultChecked={"deactivateUsers" in level ? level.deactivateUsers : false} type="checkbox" name="deactive__users" id="deactive__users" className="set__modal__content__common__className" /> Деактивація користувачів</label>
                <label htmlFor="distribution__of__users__rights"><input defaultChecked={"specificationUsers" in level ? level.specificationUsers : false} type="checkbox" name="distribution__of__users__rights" id="distribution__of__users__rights" className="set__modal__content__common__className" /> Розподіл прав доступу</label>
                <label htmlFor="add__and__edit__categories__of__cases"><input defaultChecked={"addEditCategoriesCase" in level ? level.addEditCategoriesCase : false} type="checkbox" name="add__and__edit__categories__of__cases" id="add__and__edit__categories__of__cases" className="set__modal__content__common__className" /> Додавати і редагувати категорії кейсів</label>
                <label htmlFor="add__and__edit__categories__of__users"><input defaultChecked={"addEditCategoriesUser" in level ? level.addEditCategoriesUser : false} type="checkbox" name="add__and__edit__categories__of__users" id="add__and__edit__categories__of__users" className="set__modal__content__common__className" /> Додавати і редагувати категорії користувачів</label>
                <label htmlFor="createContact"><input defaultChecked={"createContact" in level ? level.createContact : false} type="checkbox" name="createContact" id="createContact" className="set__modal__content__common__className" /> Додавати і редагувати категорії контактів</label>
            </div>
        </div>
        <div className="set__modal__content__case  set__cont">  
            <div className="set__modal__content__labels">
            <h3>Кейс</h3>
                <label htmlFor="edit__someones__case"><input defaultChecked={"editSomeonesCase" in level ? level.editSomeonesCase : false} type="checkbox" name="edit__someones__case" id="edit__someones__case" className="set__modal__content__common__className" /> Редагувати чужий кейс</label>
                <label htmlFor="createCase"><input defaultChecked={"createCase" in level ? level.createCase : false} type="checkbox" name="createCase" id="createCase" className="set__modal__content__common__className" /> Створення кейсу</label>
                <label htmlFor="edit__own__case"><input defaultChecked={"editOwnCase" in level ? level.editOwnCase : false} type="checkbox" name="edit__own__case" id="edit__own__case" className="set__modal__content__common__className" /> Редагувати свій кейс</label>
                <label htmlFor="loadCaseFiles"><input defaultChecked={"loadCaseFiles" in level ? level.loadCaseFiles : false} type="checkbox" name="loadCaseFiles" id="loadCaseFiles" className="set__modal__content__common__className" /> Завантаження файлів</label>
                <label htmlFor="change__responsible__for__case"><input defaultChecked={"changeResponsibleCase" in level ? level.changeResponsibleCase : false} type="checkbox" name="change__responsible__for__case" id="change__responsible__for__case" className="set__modal__content__common__className" /> Змінити відповідального за кейс/передати свій кейс</label>
                <label htmlFor="create__individual__plan"><input defaultChecked={"createIndividualPlan" in level ? level.createIndividualPlan : false} type="checkbox" name="create__individual__plan" id="create__individual__plan" className="set__modal__content__common__className" /> Створення індивідуального плану</label>
                <label htmlFor="connectionsCase"><input defaultChecked={"connectionsCase" in level ? level.connectionsCase : false} type="checkbox" name="connectionsCase" id="connectionsCase" className="set__modal__content__common__className" /> Створення зв'язків між кейсами</label>
                <label htmlFor="notesCase"><input defaultChecked={"notesCase" in level ? level.notesCase : false} type="checkbox" name="notesCase" id="notesCase" className="set__modal__content__common__className" /> Додавати нотатки</label>
                <label htmlFor="helpesCase"><input defaultChecked={"helpesCase" in level ? level.helpesCase : false} type="checkbox" name="helpesCase" id="helpesCase" className="set__modal__content__common__className" /> Додавати надану допомогу</label>
            </div>
        </div>
        <div className="set__modal__api__case  set__cont">  
            <div className="set__modal__content__labels">
            <h3>API</h3>
               <label htmlFor="api__pdf__case"><input defaultChecked={"apiPdfCase" in level ? level.apiPdfCase : false} type="checkbox" name="api__pdf__case" id="api__pdf__case" className="set__modal__content__common__className" /> Експорт кейса у ПДФ </label>
               <label htmlFor="api__update__program"><input defaultChecked={"apiUpdateProgram" in level ? level.apiUpdateProgram : false} type="checkbox" name="api__update__program" id="api__update__program" className="set__modal__content__common__className" /> Оновлення програми </label>
            </div>
        </div>
    </div>
        )
    }

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
            console.log(data)
           setCategoriesCase(data.data.mas);
           setCategoriesAccess(data.data.mas);
           masCategories = data.data.mas;
           masCategoriesAccess = data.data.mas;
          // window.location.reload()        
        })
        .catch((error)=>console.log(error)) 
    },[])
    const CategoriesData = ({category, index, lf})=>{
        return (
            <label>
                <input defaultChecked={category.value in lf ? lf[category.value] : false} type="checkbox" value={category.value} id={`cat${index}`} /> {category.text}
            </label>
        )
    }
    const CategoriesMas = (pos, lf)=>{
        console.log(pos)
        if(pos.length < 1 || pos == false) return;
                categoriesStr =  pos.map((post,index)=>{
                return <CategoriesData lf={lf} key={index} category={post} index={index}/>
        })  
    }    



    useEffect(()=>{ 
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres("manage/get-categories-contact.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data)
           setCategoriesContact(data.data.mas);
           masCategoriesContact = data.data;  
        })
        .catch((error)=>console.log(error)) 
    },[])
    const CategoriesDataContact = ({category, index, lf})=>{
        return (
            <label>
                <input defaultChecked={category.value in lf ? lf[category.value] : false} type="checkbox" value={category.value} id={`con${index}`} /> {category.text}
            </label>
        )
    }
    const CategoriesDataAccess = ({category, index, lf})=>{
        console.log(category,index,lf)
        return (
            <label>
                <input defaultChecked={"acs"+category.value in lf ? lf["acs"+category.value] : false} type="checkbox" value={"acs"+category.value} id={`acs${index}`} /> {category.text}
            </label>
        )
    }
    const CategoriesMasContact = (pos, lf)=>{
        console.log(pos)
        if(pos.length < 1 || pos == false) return;
                categoriesStrContact =  pos.map((post,index)=>{
                return <CategoriesDataContact lf={lf} key={index} category={post} index={index}/>
        })  
    } 
    const CategoriesMasAccess = (pos, lf)=>{
        console.log(pos)
        if(pos.length < 1 || pos == false) return;
                categoriesStrAccess =  pos.map((post,index)=>{
                return <CategoriesDataAccess lf={lf} key={index} category={post} index={index}/>
        })  
    } 


   
    return active ?(
        <div className={"set__modal__wrap"} id="set__modal__wrap">
            <div className="set__modal__close" onClick={()=>{close()}}>
                <span></span>
                <span></span>
            </div>
            <div className="set__modal__inner">
                <div className="set__modal">
                   <h2>Налаштування прав доступу для {props.userName}</h2> 
                   <FormsSpecificate level={props.level} />
                   <div className="set__modal__btn">
                        <button className="primary__btn" onClick={()=>{saveUserSettings(props.id)}}>Зберегти</button>
                   </div>
                </div>
            </div>
            
        </div>
    ):(
        <>
        </>
    )
}

export default SpecificateForm;