import React from "react";
import axios from "axios";
import "./Info.css";
import { useState } from "react";
import {useForm} from "react-hook-form";
import Loading from "../../../Loading/Loading";
import Loadpic from "../../../Loading/Interactive/Loadpic";

const CasePhoto = (props)=>{

    const [loading, setLoading] = useState("");
    const [imgCase, setImgCase] = useState(props.url);
    const [imgSave, setImgSave] = useState(false);
    const changePic = (data) =>{
        const formCaseEdit = document.getElementById(data)
        const formData = new FormData();
        let imagefile = document.getElementById("uploadbtn");
       // return console.log(imagefile.files[0])
        formData.append("image", imagefile.files[0]);
        formData.append("id",window.location.search.slice(1));
        formData.append("key","case");
        axios({
            url: "http://case.ua/upload-case-img.php",
            method: "POST",
            header : {'Content-Type': 'multipart/form-data'},
            data : formData,
            onUploadProgress: event => {
                setLoading("active")
                setImgSave(true)
                console.log(Math.round(event.loaded * 100 / event.total))
            }
        })
        .then((data)=>{
            setImgCase(data.data);
            console.log(data)
            setLoading("")
        })
        .catch((error)=>console.log(error))    
    }   
    function saveImg(){
        let obj = {
            caseId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: "http://case.ua/save-case-img.php",
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
            onUploadProgress: event => {
                setLoading("active")
            }
        })
        .then((data)=>{
            console.log(data)
            setImgSave(false)
            setLoading("")
            
        })
        .catch((error)=>console.log(error))  
        
    }
    return(
        <div className="case__contact__info__img">
                <div className="case__contact__info__img__inner">
                    <img src={`${imgCase}`} alt="" />
                    <Loadpic show = {loading}/>
                        <form id="caseImgEdit">
                            
                             {imgSave ? <span className="case__edit__img__ok" onClick={()=>{saveImg()}}>OK</span> : <label htmlFor="uploadbtn" className="case__edit__img">Edit</label> }
                            <input onChangeCapture={()=>{changePic("caseImgEdit")}} multiple id="uploadbtn" type="file" name="uploadbtn"/>
                        </form>
                </div>
                
                
                
        </div>
    )
}
export default CasePhoto;