import React, {useState, useEffect} from "react";
import axios from "axios";
import Loadpic from "../Loading/Interactive/Loadpic";

const User = ()=>{
    const [user, setUser] = useState({data:null});
    const [loading, setLoading] = useState("");
    window.onload = ()=>{
        let obj = {
            userId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: "http://case.ua/get-user.php",
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
            onUploadProgress: event => {
                setLoading("active")
            }
        })
        .then((data)=>{
            console.log(data);
            setUser({data:data})
            setLoading("")
            
        })
        .catch((error)=>console.log(error))  
}
    
    return(
        <div className="user__wrap">
            <Loadpic show = {loading}/>
        </div>
        
    )
}

export default User;