import React, {useState, useEffect} from "react";
import axios from "axios";
import Loadpic from "../Loading/Interactive/Loadpic";
import ModalInfo from "../Modals/ModalInfo";
import ProfilePhoto from "./UserInfo/ProfilePhoto";
import { serverAddres } from "../Functions/serverAddres";

const User = ()=>{
    const [loading, setLoading] = useState();
    const [modal, setModal] = useState({showModal:false, message:"123"})
    const [user, setUser] = useState({obj:""});

    useEffect(()=>{
        let obj = {
            userId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres("user/get-user.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
            onUploadProgress: event => {
                setLoading("active")
            }
        })
        .then((data)=>{
            if(Object.keys(data.data).includes("message")){
                setModal({
                    showModal:true,
                    message:data.data.message,
                    marker:data.data.marker
                })
            }
            console.log(data.data);
            setUser(data.data)
            
            setLoading("")
            
        })
        .catch((error)=>console.log(error))  
},[])
    
    return(
        <div className="user__wrap">
            <ProfilePhoto url={user.profileUrl}/>
            <Loadpic show = {loading}/>
            {modal.showModal ? <ModalInfo info={modal} func={()=>{window.location.href="/login"}}/> : null}
        </div>
    )
}

export default User;