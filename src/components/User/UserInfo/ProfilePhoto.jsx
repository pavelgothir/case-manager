import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {useForm} from "react-hook-form";
import Loadpic from "../../Loading/Interactive/Loadpic";
import { serverAddres } from "../../Functions/serverAddres";





const ProfilePhoto = ({url})=>{
    const [loading, setLoading] = useState("");
    console.log(url)
    const changePic = (data) =>{
        const formCaseEdit = document.getElementById(data)
        const formData = new FormData();
        let imagefile = document.getElementById("uploadbtn");
       // return console.log(imagefile.files[0])
        formData.append("image", imagefile.files[0]);
        formData.append("id",window.location.search.slice(1));
        formData.append("key","user");
        axios({
            url: serverAddres("upload-case-img.php"),
            method: "POST",
            header : {'Content-Type': 'multipart/form-data'},
            data : formData,
            onUploadProgress: event => {
                setLoading("active")
                console.log(Math.round(event.loaded * 100 / event.total))
            }
        })
        .then((data)=>{
                localStorage.setItem("profilePhoto", data.data)
               // return console.log(data.data)
                window.location.reload()
                setLoading("")
        })
        .catch((error)=>console.log(error))    
    }   
    return(
        <div className="case__contact__info__img">
                <div className="case__contact__info__img__inner">
                    <img src={`${url}`} alt="" />
                    <Loadpic show = {loading}/>
                        <form id="caseImgEdit">
                            <label htmlFor="uploadbtn" className="case__edit__img">Edit</label>
                            <input onChangeCapture={()=>{changePic("caseImgEdit")}} multiple id="uploadbtn" type="file" name="uploadbtn"/>
                        </form>
                </div>
                
                
                
        </div>
    )
}
export default ProfilePhoto;