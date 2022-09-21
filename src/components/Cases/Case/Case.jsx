import React, {useState, useEffect} from "react";
import PhotosForm from "./PhotosForm";
import Photo from "./Photo";
import CasePhoto from "./Info/CasePhoto";
import Loadpic from "../../Loading/Interactive/Loadpic";
import "./case.css"
import CaseShortInfo from "./Info/Caseshortinfo";
import JournalActive from "./Info/JournalActive";
import PlanActive from "./Info/PlanActive";
import axios from "axios";
import EditCaseInfo from "./Info/EditCaseInfo";

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
        url: "http://case.ua/case/save-infoCase.php",
        method: "POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        data : JSON.stringify(obj),
    })
    .then((data)=>{ 
        console.log(data)
      // window.location.reload()        
    })
    .catch((error)=>console.log(error))  
}
const Case = (props)=>{
    const [post, setPost] = useState({id:"",contact:{caseName:""},photos:[]});
    const [editActive, setEditActive] = useState(false)
    useEffect(()=>{
        fetch("http://case.ua/get-case.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:JSON.stringify({"id":window.location.search.slice(1),
                "userId":localStorage.getItem("id"),
                "token": localStorage.getItem("token")
            })
            })
            .then(res => res.json())
            .then(res => {
               if("message" in res){
               return console.log(res.message)
               }
               
               res.contact = JSON.parse(res.contact);
               res.activity = JSON.parse(res.activity);
               res.plan = JSON.parse(res.plan)
               if(res.photos !== null){
                res.photos = JSON.parse(res.photos);
               }else{
                res.photos = [];
               }
               setPost(res)
            })
            .catch(rejected => {
                console.log(`${rejected}`);
            });
    },[])
    
    return !!post.id ?(
        <div className="case__wrap">
        <div className="case__contact__info">
            <div>
                <CasePhoto url={`${post.contact.imgUrl}`}/>
            </div>
            <div><h1>{post.contact.surname} {post.contact.firstName} {post.contact.secondName}</h1>
                <CaseShortInfo info = {post.contact}/>
            </div>
            <div>
                <button onClick={()=>{
                    setEditActive(true)
                }}>Редагувати</button>
            </div>     
        </div> 
        <div className="Journal__and__plan">
            <JournalActive info={post.activity} />
            {post.contact.numberDogovir > 1 ? <PlanActive info = {post.plan}/> : 
            <div className="plan__active">
                <h2>Індивідуальний план</h2>
                <p>Неможливо встановити Індивідуальний, необхідно заключити договір з клієнтом</p>
                <div className="grod">
                    <label htmlFor="dogovirDate">Дата<input type="date" id="dogovirDate"/></label>
                    <label htmlFor="dogovirNumber">Номер<input type="text" id="dogovirNumber"/></label>
                    <button onClick={saveInfoDogovir}>Зберегти інформацію</button> 
                </div>
            </div>}
        </div>
        <div className="media__content">
            <Photo photos = {post.photos}/>
        </div>    
            <PhotosForm photos = {post.photos}/>
            <EditCaseInfo caseInfo = {post.contact} active = {editActive} categoriesMas = {post.contact.categories} close = {()=>{
                setEditActive(false)
            }}/>
        </div>
        
    ):(
        <>
            <Loadpic show={"active"} />
        </>
    )
}

export default Case;