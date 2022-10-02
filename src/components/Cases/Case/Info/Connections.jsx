import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { serverAddres } from "../../../Functions/serverAddres";
const Active = ({elem})=>{
    console.log(elem)
    return(
         <div className="connect__viewer__line">
         <div className="connect__viewer__data">
             <div>
             <a href={`/case?${elem.connectId}`} >{elem.connectFor} Номер кейсу {elem.connectId}</a>
                 <span>Дата створення зв'язку{elem.date}</span>  
                 <span>Створив зв'язок <NavLink to={`/user?${elem.userId}`}>{elem.userName}</NavLink> </span>  
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
const Connections = ()=>{
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
    return(
        <div className="connections__case">
            <div className="connections__to">
                <div className="connections__form">
                    <div className="connect__for">
                        <input type="text" name="connect__for" id="connect__for" placeholder="Причина зв'язку" />
                    </div>
                    <div className="connect__control">
                        <input type="number" name="connect__id" id="connect__id" placeholder="номер кейса" />
                        <button onClick={()=>{
                            if(document.querySelector("#connect__for").value.trim().length < 1) return;
                            if(document.querySelector("#connect__id").value.trim().length == 0) return;
                            connectFor(document.querySelector("#connect__for").value.trim(),document.querySelector("#connect__id").value)
                        }}>З'єднати</button>
                    </div>
                </div>
                <div className="connections__items">
                    {conFor}
                </div>
            </div>
            <div className="connections__from">
                <div className="connections__items">
                    {conFrom}
                </div>
            </div>
        </div>
    )
}
export default Connections;