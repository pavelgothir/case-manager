import React from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { serverAddres } from "../../../Functions/serverAddres";



const Active = ({elem})=>{
    console.log(elem)
    return(
         <div className="notes__viewer__line">
         <div className="notes__viewer__data">
             <div>
             <NavLink to={`/user?${elem.userId}`} >{elem.userName}</NavLink>
                 <span>{elem.date}</span>  
                 <span>{elem.time}</span>  
             </div>
             
         </div>
         <div className="notes__viewer__mess">
             <span>{elem.mess}</span>
         </div>
     </div>
    )
}

const Notes = ({notes})=>{
    function addNote(){
        let mess = document.querySelector("#mess__note").value.replaceAll("'", "’").replace(/\n/g, "<br />");
        let obj = {
            caseId:window.location.search.slice(1),
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            mess: mess,
            userName: localStorage.getItem("userName")
        }
        console.log(obj)
        axios({
            url: serverAddres("case/add-note.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data)
            setActNote(data.data)  
        })
        .catch((error)=>console.log(error))  
    }
    const [actNote, setActNote] = useState(notes);

    const active = actNote.map((elem,index)=>{
        return <Active key={index} elem={elem}/>
    }) 
    
    return(
        <>
            <div className="notes__wrap">
                <div className="notes__inner">
                    <h2>Нотатки</h2>
                    <div className="notes__viewer">
                       {active}
                    </div>
                    <div className="notes__mes__wrap">
                        <div className="notes__mes__inner">
                            <div className="notes__field">
                                <textarea name="" id="mess__note" cols="30" rows="5"></textarea>
                            </div>
                            <div className="notes__btn">
                                <button onClick={addNote}>Надіслати</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notes;