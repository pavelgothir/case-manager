import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { doneBells } from "../../../services/user-api";
import s from "./bell.module.css";
import bellImg from "./../../../img/icons/bell-50.png";
import axios from "axios";
import { serverAddres } from "../../Functions/serverAddres";
const Bell = ()=>{
 
    const [bells, setBells] = useState([])
    const [bellsCount, setBellsCount] = useState(0)
    const [active,setActive] = useState(false)
    function getBells(){
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
        }
        axios({
            url: serverAddres("user/get-notification.php"),
            method: "POST",
            header: { 'Content-Type': 'application/json;charset=utf-8' },
            data: JSON.stringify(obj),
          })
            .then((data) => {
                console.log(data.data)
        
                        setBellsCount(data.data.length)
                        setBells(data.data)
                   
            })
            .catch((error) => console.log(error))
    }
    useEffect(()=>{
        
        getBells()
       
      },[])
    return(
        <div className={s.bell__wrap}>
            <div className={s.wr__img}><img src={bellImg} className={s.bell__img} alt="" onClick={()=>{
                setActive(!active)
            }}/>{bellsCount !== 0 ? <span className={s.count}> {bellsCount} </span>: null}</div>
            {active ? <div className={s.wrap__bells}>
                <div className={`${s.black} ${s.active}`}onClick={()=>{
                setActive(!active)
            }}></div>
                <div>
                    <div className={`${s.items} ${s.active}`}>
                        {bells.map((item,index)=>{
                            return(
                                <div className={s.item} key={index + Math.floor(Math.random() * 5000)} onClick={()=>{
                                    doneBells(item.id);
                                }}>
                                    {item.value.message}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>:null}
        </div>
    )
}

export default Bell;