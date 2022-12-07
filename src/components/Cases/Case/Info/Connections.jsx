import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { serverAddres } from "../../../Functions/serverAddres";
import { checkRight } from "../../../Functions/checkRight";

const Active = ({elem})=>{
    console.log(elem)
    return(
         <div className="connect__viewer__line">
         <div className="connect__viewer__data">
             <div>
                <p><a href={`/case?${elem.connectId}`} ><b>Зв'язок </b> {elem.connectFor} {elem.connectId}</a></p>
                 <p><span><b>Дата створення зв'язку</b> {elem.date}</span></p>
                 <p><span><b> Створив зв'язок</b> <NavLink to={`/user?${elem.userId}`}>{elem.userName}</NavLink> </span>  </p>
             </div>        
         </div>
     </div>
    )
}



function connectFor(conFor, conId){
    if(window.location.search.slice(1) == conId) return;
    let obj = {
        caseId:window.location.search.slice(1),
        id: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
        conFor: conFor,
        conId:conId,
        userName: localStorage.getItem("userName")
    }
  // console.log(obj)
    axios({
        url: serverAddres("manage/add-connections.php"),
        method: "POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        data : JSON.stringify(obj),
    })
    .then((data)=>{ 
        console.log(data) 
    })
    .catch((error)=>console.log(error))  
}
const Connections = ({level})=>{
    useEffect(()=>{
        let obj = {
            caseId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
      // console.log(obj)
        axios({
            url: serverAddres("manage/get-connections.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data) 
            setActConFor(data.data.for)
            setActConFrom(data.data.from)
        })
        .catch((error)=>console.log(error))  
    },[])
    const [actConFor, setActConFor] = useState([]);
    const [actConFrom, setActConFrom] = useState([]);

    const conFor = actConFor.map((elem,index)=>{
        return <Active key={index} elem={elem}/>
    }) 
    const conFrom= actConFrom.map((elem,index)=>{
        return <Active key={index} elem={elem}/>
    }) 
    console.log(conFor)
    return(
        <div className="connections__case">
            <div className="connections__to">
                {level ? <div className="connections__form">
                    <div className="connect__for">
                        <input type="text" name="connect__for" id="connect__for" placeholder="Причина зв'язку" />
                    </div>
                    <div className="connect__control">
                        <input type="number" name="connect__id" id="connect__id" placeholder="номер кейса" />
                        <button className="primary__btn"
                        onClick={()=>{
                            if(document.querySelector("#connect__for").value.trim().length < 1) return;
                            if(document.querySelector("#connect__id").value.trim().length == 0) return;
                            connectFor(document.querySelector("#connect__for").value.trim(),document.querySelector("#connect__id").value)
                        }}>З'єднати</button>
                    </div>
                </div>:""}
                {conFor.length > 0 ?
                <div>
                <h3>Зв'язок створено</h3>
                <div className="connections__items">      
                    {conFor}
                </div>
                </div>:""}
            </div>
            {conFrom.length > 0 ?<div className="connections__from">
            <h3>Зв'язок від</h3>
                <div className="connections__items">
                    {conFrom}
                </div>
            </div>:""}
        </div>
    )
}
export default Connections;