import React, { useEffect, useState } from "react";
import { serverAddres } from "../Functions/serverAddres";
import s from "./events.module.css";
import delImg from "./../../img/icons/delete-48.png"
import axios from "axios";
import { NavLink } from "react-router-dom";
const Events = ()=>{

    const [events, setEvents] = useState([])
    useEffect(()=>{
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            userName: localStorage.getItem("userName"),
        }
        axios({
            url: serverAddres("event/get-events.php") ,
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            setEvents(data.data)   
        })
        .catch((error)=>console.log(error)) 
    },[])
    return(<div className={s.wrap}>
        <h1>Івенти</h1>
        <div className={s.inner}>
                {events.map((item,index)=>{
                    return(<div key={index} className={s.result} style={{boxShadow:"0 0 5px 0" + item.color}}>
                    <div className={s.res__color} style={{backgroundColor:item.color}}></div>
                    <div className={s.res__title}>
                       <NavLink className={s.link} to={`/events/${item.link}`}> <h3>{item.title}</h3></NavLink>
                    </div>
                    <div className={s.res__desc}>
                        <p>{item.description.replaceAll("<br />"," ")}</p>
                    </div>
                    <div className={s.author}>Створив: {item.meta.userName}</div>
                    <div className={s.res__control}>
                        <div className={s.delete}><img src={delImg} alt="" /></div>
                        <div className={s.date}>{item.meta.date}</div>
                    </div>
                </div>)
                })}
        </div>
    </div>)
}

export default Events;