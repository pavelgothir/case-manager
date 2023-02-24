import React from "react";
import SetUser from "./SetUser/SetUser";
import "./settings.css"
import SetCategories from "./SetCase/SetCategories";
import SetContactCategory from "./SetContactCategory";
import LoadingPage from "../Loading/LoadingPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { serverAddres } from "../Functions/serverAddres";
import SetEvent from "./SetEvent/SetEvent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Settings = (props)=>{
   
    const [page, setPage] = useState({loading:true,effload:false,message:""})
    useEffect(()=>{
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres('user/page-setting.php'),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data.data)
            if(data.data?.message){
                setPage({
                        effload:false,
                        message: data.data.message,
                        loading:true
                    })
            }else{
                    setPage({loading:false})
            }
        })
        .catch((error)=>console.log(error)) 
    },[])
    return page.loading ?(
        <div className="page__loading">
            <LoadingPage message={page.message} effload = {page.effload}/>
        </div>
    ):(
        <div className="page">
             <div className="page__title">
                <h1>Налаштування</h1>
            </div>
            <div className="settings__page">
            <SetUser />
            <SetCategories />
            <SetContactCategory />
            <SetEvent />
        </div>
        
        </div>
       
    )
}
export default Settings;