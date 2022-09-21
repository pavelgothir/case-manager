import React from "react";
import editImg from "../../../../img/icons/edit-50.png";
import deleteImg from "../../../../img/icons/delete-48.png";
import saveImg from "../../../../img/icons/save-50.png";
import axios from "axios";
import { useState } from "react";
function elemPlanDone(index, a, nameOfPlan){

    let obj = {
        caseId:window.location.search.slice(1),
        id: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
        index:index,
        checked: a,
        nameOfPlan: nameOfPlan
    }
    console.log(obj)
    axios({
        url: "http://case.ua/case/elem-plan-done.php",
        method: "POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        data : JSON.stringify(obj),
    })
    .then((data)=>{ 
        console.log(data)
      //  window.location.reload()        
    })
    .catch((error)=>console.log(error))  
}
function planIsDone(plan){
    console.log(plan)
}
let pty = -1;
const Plan = ({plan,index})=>{
    let part = ""
    const ElemPlan = ({planis, index})=>{
        return(
            <div className="part__plan">
                <div className="part__line">
                    <div className="part__symbol">
                        <div className="part__line__elem">
                            <div className="part__circle"></div>
                        </div>
                    </div>
                </div>
                <div className="part__line">
                    <div className={`part__plan__date ${planis.done ? "borderGreen" : ""}`}>
                        <input disabled type="date" name={`start__planID${index}`} id={`start__planID${index}`} value={planis.start} />
                        <span> | </span>
                         <input disabled type="date" name={`end__planID${index}`} id={`end__planID${index}`} value={planis.end} />
                    </div>
                </div>
                <div className="part__line">
                    <div className="part__symbol">
                        <div className="part__line__elem">
                            <div className="part__circle"></div>
                        </div>
                    </div>
                </div>
                <div className="part__line">
                    <div className="part__plan__description">
                        <div className="part__plan__control">
                            <input disabled defaultChecked={planis.done} type="checkbox" name={`goodPlan${index}`} id={`goodPlan${index}`} onChange={()=>{
                               let a = document.querySelector(`#goodPlan${index}`).checked
                                elemPlanDone(index, a, plan.nameOfPlan)
                            }} />
                            <img src={editImg} className="editPlan active" alt="Редагувати" id={`editPlan${index}`} title="Редагувати" onClick={()=>{
                                console.log("hello")
                                document.querySelector(`#goodPlan${index}`).disabled = false;
                                document.querySelector(`#start__planID${index}`).disabled = false;
                                document.querySelector(`#end__planID${index}`).disabled = false;
                                document.querySelector(`#desc__planID${index}`).disabled = false;
                                document.querySelector(`#savePlan${index}`).classList.toggle("active");
                                document.querySelector(`#editPlan${index}`).classList.toggle("active");
                            }} />
                            <img src={saveImg} alt="Зберегти" className="savePlan green__back" title="Зберегти" id={`savePlan${index}`} />
                        </div>
                        <textarea disabled name={`desc__planID${index}`} id={`desc__planID${index}`} cols="30" rows="5" value={planis.desc.replaceAll("<br />", "\n")}></textarea>
                        <div className="deletePlan__wrap">
                        <img src={deleteImg} className="deletePlan red__back" id={`deletePlan${index}`} alt="Видалити" title="Видалити" />
                        </div>
                    </div>  
                </div>    
            </div>
        )
        
    }
    const ElemsPlan = ()=>{
           part =  plan.plans.map((planis,index)=>{
            pty++;
            return <ElemPlan key={index} planis={planis} index = {pty}/>
    })
    }
    console.log(plan)

    return(

            <div className="wrap__plan">
                <div className="plan__created">
                <span>{plan.dateCreated}</span>
            </div>
            {ElemsPlan()}
            {part}
            <div className="part__plan__btn">
                <button onClick={()=>{planIsDone(plan)}}>Завершити план</button>
            </div>
            </div>
            
    )
}

export default Plan;