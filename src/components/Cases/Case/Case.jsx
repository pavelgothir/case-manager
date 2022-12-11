import React, {useState, useEffect} from "react";
import PhotosForm from "./PhotosForm";
import Photo from "./Photo";
import CasePhoto from "./Info/CasePhoto";
import "./case.css"
import CaseShortInfo from "./Info/Caseshortinfo";
import JournalActive from "./Info/JournalActive";
import PlanActive from "./Info/PlanActive";
import axios from "axios";
import EditCaseInfo from "./Info/EditCaseInfo";
import Notes from "./Info/Notes";
import CaseGiveHelp from "./Info/CaseGiveHelp";
import Connections from "./Info/Connections";
import {serverAddres } from "../../Functions/serverAddres";
import ExportPDF from "./Info/ExportPDF";
import LoadingPage from "./../../Loading/LoadingPage";
import { checkRight } from "../../Functions/checkRight";
const Case = ()=>{
    const [post, setPost] = useState({id:"",contact:{caseName:""},photos:[],notes:[]});
    const [editActive, setEditActive] = useState(false)
    const [page, setPage] = useState({
        loading:true,
        cases:false,
        message:""
    })
    useEffect(()=>{
        let obj = {
            "id":window.location.search.slice(1),
            "userId":localStorage.getItem("id"),
            "token": localStorage.getItem("token")
        }
        axios({
            url: serverAddres("get-case.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 

            let res = data.data;
            console.log(data.data)
            if(res?.message){
                setPage({...page,message:res.message})
                return console.log(res.message)
                }
                res.contact = JSON.parse(res.contact);
                res.activity = JSON.parse(res.activity);
                if(res.plan.length !== 0){
                 res.plan = JSON.parse(res.plan)
                }
                
                if(res.photos !== null && res.photos !== ""){
                 res.photos = JSON.parse(res.photos);
                }else{
                 res.photos = [];
                }
                if(res.notes !== null && res.notes !== ""){
                 res.notes = JSON.parse(res.notes);
                }else{
                 res.notes = [];
                }
                setPost(res)
                console.log("AAAAA")
                console.log(res)
        })
        .catch((error)=>console.log(error)) 
       
    },[])
    
    function saveInfoDogovir(){
        let dateDogovir = document.getElementById("dogovirDate");
        let numberDogovir = document.getElementById("dogovirNumber");
        let obj = {
            caseId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            dateDogovir:dateDogovir.value,
            numberDogovir:numberDogovir.value
        }
        axios({
            url: serverAddres("case/save-infoCase.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj)
        })
        .then((data)=>{ 
            console.log(data)
          // window.location.reload()        
        })
        .catch((error)=>console.log(error))  
    }
    return !!post.id ?(
        <div className="case__wrap">
            {console.log(post.contact)}
        <div className="case__contact__info">
            <div>
                <CasePhoto url={`${post.contact.imgUrl}`} level = {checkRight(post.level, "editOwnCase")} />
            </div>
            <div><h1 className="case__title">{post.contact.surname} {post.contact.firstName} {post.contact.secondName} <span>№ {post.id}</span></h1>
                <CaseShortInfo info = {post.contact} />
                
            </div>
            {
            checkRight(post.level, "editOwnCase") || checkRight(post.level, "editSomeonesCase") && post.contact.userId !== localStorage.getItem("id")
            ?<div>
                <button className="primary__btn"
                onClick={()=>{
                    setEditActive(true)
                }}>Редагувати</button>
            </div> :""}    
        </div> 
        <div className="container__grid__two">   
            <div className="connections__inner">
                <h2>Зв'язки кейса з іншими кейсами</h2>
                <Connections level = {checkRight(post.level, "connectionsCase")}/>
            </div>
            {checkRight(post.level,"apiPdfCase")? <div className="pdf__inner">
                <h2>Експорт у форматі PDF</h2>
                <ExportPDF />  
            </div>:""}
           
            {false ? <JournalActive info={post.activity} /> : ""}
            { post.contact.dateDogovir.length > 1 ? <PlanActive info = {post.plan == "" ? null : post.plan} level = {checkRight(post.level, "createIndividualPlan")}/> : 
            <div className="plan__active">
                <h2>Індивідуальний план</h2>
                <p>Неможливо встановити Індивідуальний, необхідно заключити договір з клієнтом</p>
                {checkRight(post.level, "editOwnCase") ? <div className="grod">
                    <label htmlFor="dogovirDate">Дата<input type="date" id="dogovirDate"/></label>
                    <label htmlFor="dogovirNumber">Номер<input type="text" id="dogovirNumber"/></label>
                    <button className="primary__btn padding20px" onClick={saveInfoDogovir}>Зберегти інформацію</button>
                </div>:"" } 
            </div>}
            <Notes notes = {post.notes} level={checkRight(post.level, "notesCase")}/>
            <CaseGiveHelp level={checkRight(post.level, "helpesCase")}/>
        </div>
        <div className="media__content">
            <Photo photos = {post.photos}/>
        </div>    
            <PhotosForm photos = {post.photos} show = {post.level?.loadCaseFiles == true || post.level?.root == "true" ? true : false}/>
            <EditCaseInfo caseInfo = {post.contact} active = {editActive} categoriesMas = {post.contact.categories} close = {()=>{
                setEditActive(false)
            }}/>
        </div>
        
    ):(
        <>
            <div className="page__loading">
                <LoadingPage message={page.message} effload = {page.effload}/>
            </div>
        </>
    )
}

export default Case;