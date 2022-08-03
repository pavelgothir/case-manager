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
    const changePic = (data) =>{
        const formCaseEdit = document.getElementById(data)
        const formData = new FormData();
        let imagefile = document.getElementById("uploadbtn");
       // return console.log(imagefile.files[0])
        formData.append("image", imagefile.files[0]);
        formData.append("id",window.location.search.slice(1));
        axios({
            url: "http://case.ua/upload-case-img.php",
            method: "POST",
            header : {'Content-Type': 'multipart/form-data'},
            data : formData,
            onUploadProgress: event => {
                setLoading("active")
                
                console.log(Math.round(event.loaded * 100 / event.total))
            }
        })
        .then((data)=>{
            setImgCase("http://"+data.data);
            console.log(data)
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
                            <label htmlFor="uploadbtn" className="case__edit__img">Edit</label>
                            <input onChangeCapture={()=>{changePic("caseImgEdit")}} multiple id="uploadbtn" type="file" name="uploadbtn"/>
                        </form>
                </div>
                
                
                
        </div>
    )
}
export default CasePhoto;