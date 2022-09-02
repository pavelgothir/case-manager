import React from "react";
import editImg from "../../../../img/icons/edit-50.png";
import deleteImg from "../../../../img/icons/delete-48.png";

let pty = -1;
const Plan = ({plan,index})=>{
    let part = ""
    const ElemPlan = ({planis})=>{
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
                    <div className="part__plan__date">
                        <span>{planis.start}</span>
                        <span>{planis.end}</span>
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
                            <input type="checkbox" name={`goodPlan${pty}`} id={`goodPlan${pty}`} onChange={()=>{
                                console.log(`goodPlan${pty}`)
                            }} />
                            <img src={editImg} alt="Редагувати" title="Редагувати" />
                            <img src={deleteImg} alt="Видалити" title="Видалити" />
                        </div>
                        <p>{planis.desc}</p>
                    </div>  
                </div>    
            </div>
        )
        
    }
    const ElemsPlan = ()=>{
           part =  plan.plans.map((planis,index)=>{
            pty++;
            return <ElemPlan key={index} planis={planis}/>
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
            </div>
            
    )
}

export default Plan;