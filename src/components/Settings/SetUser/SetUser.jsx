import React, {useEffect, useState} from "react";
import axios from "axios";
import Loadpic from "../../Loading/Interactive/Loadpic";
import deleteImg from "./../../../img/icons/delete-48.png";
import bookImg from "./../../../img/icons/book-50.png";
import showImg from "./../../../img/icons/show-50.png";
import hideImg from "./../../../img/icons/hide-50.png";
import SpecificateForm from "./SpecificateForm";
import {serverAddres} from "./../../Functions/serverAddres";
let usersStr = "";


const SetUser = ()=>{
    const [users, setUsers] = useState(null);
    const [specificate, setSpecificate] = useState(null);
    const [activeSpecificate, setActiveSpecificate] = useState(false);
    const [level, setLevel]  = useState({"foo":"bar"})
    function activateUser(arg,userID, text){
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            activate: arg,
            userId:userID,
            text:text
        }
        axios({
            url: serverAddres("user/activate.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data.data)
            if(arg == "true"){
                alert("Користувача активовано")
            }else{
                alert("Користувача деактивованро")
            }
           window.location.reload()        
        })
        .catch((error)=>console.log(error)) 
    }
    useEffect(()=>{
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres("user/get-users.php") ,
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data)
            setUsers(data.data);
           // console.log(data.data.level)
          //  setLevel(data.data.level)
          // window.location.reload()        
        })
        .catch((error)=>console.log(error)) 
    },[])

    const UsersData = ({user, index})=>{
        console.log(user.active)
        return (
                <div className={`set__users__data__line ${index%2 == 0 ? "arc" : ""}`}>
                    <div className={`set__user__wr ${user.active == "true" ? "arc":""}`}>
                        <div className="set__user__name"><a href={`/user?${user.id}`}>{user.userName}</a></div>
                        <div className="set__user__type"><span>{user.type}</span></div>
                    </div>
                    
                    <div className="set__user__control__panel">
                        <div className={`set__user__control__panel__icons ${user.active == "true" ? "arc":""}`}>
                            <img id="deleteImg" src={deleteImg} alt="" />
                            <img id="bookImg" src={bookImg} alt="" onClick={()=>{
                                changeSpecification(user)
                            }} />
                            {user.active == "true" ? <img id="showImg" src={showImg} alt="" onClick={()=>{activateUser("false",user.id,"Деактивовано")}} /> : <img id="hideImg" src={hideImg} alt="" onClick={()=>{activateUser("true",user.id, "Активовано")}} />}
                            
                        </div>
    
                    </div>
                </div>
        )
    }
    const UserMas = (pos)=>{
        if(pos.length < 1) return;
                usersStr =  pos.map((post,index)=>{
                return <UsersData key={index} user={post} index={index}/>
        })  
    }    
    function changeSpecification(arg){
      
        setSpecificate(arg)
        setLevel(arg.level)
        setActiveSpecificate(true);
    }
    return !users ?(
        
        <><Loadpic show="active"/></>
    ):(
        
         <div className="set__users__wrap">
                <div className="set__users__inner">
                    <h2>Користувачі</h2>
                    <div className="set__users__data">
                        <div className="set__users__data__title">
                            <div className="set__users__data__title__text">
                                <div><span>ПІБ</span></div>
                                <div><span>Тип</span></div>              
                            </div>

                            <div className="set__users__data__title__panel">
                               <div><span>Панель керування</span></div> 
                            </div>
                        </div>
                        <div className="set__users__data__lines">
                            {UserMas(users)}
                            {usersStr}
                        </div>
                    </div>
                </div>
            <SpecificateForm props = {specificate} active = {activeSpecificate} levela = {level} close = {()=>{setActiveSpecificate(false)}}/>
        </div>
    )
}
export default SetUser;