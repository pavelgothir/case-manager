import React from "react";
{dateCreate, check, background, text, dateFinish,nameOfPlan}
const Plan = ({elem})=>{
    console.log(elem)
    return(
        <div className="plan__line">
            <div className="journal__date">
                <p>{elem.date}</p>
            </div>
            <div className="journal__message">
                <p>{elem.message}</p>
            </div>
        </div>
    )
}
const PlanActive = ({info})=>{
    const active = info.map((elem,index)=>{
        return <Plan key={index} elem={elem}/>
    }) 
    return(
        <div className="plan__active">
            <div className="plan__active__default__data">
                <div className="plan__active__default__data__name"></div>
                <div className="plan__active__default__data__date"></div>
            </div>
            {active}
        </div>
    )
}
export default PlanActive;