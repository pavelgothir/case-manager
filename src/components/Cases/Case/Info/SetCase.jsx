import React from "react";
import { checkRight } from "../../../Functions/checkRight";
import ExportPDF from "./ExportPDF";
import ChangeUser from "./Settings/ChangeUser";
import s from "./Settings/set.module.css"

const SetCase = ({caseInfo,close,level,id})=>{
   function removeEsc(event){
    if(event.code == "Escape"){
        document.removeEventListener("keydown",removeEsc,false);
            close()
        }
   }
    document.addEventListener("keydown",removeEsc,false)
    return (
        <>
        
        <div className={s.wrap}>
            <div className={s.close} onClick={close}></div>
            <div className={s.inner}>
                <ChangeUser id={id} userId = {caseInfo.userId}/>
                <div className={s.user__wrap}>
                    <p>Експортувати кейс у ПДФ</p>
                    {checkRight(level,"apiPdfCase") ? <ExportPDF />  : <p><i>У вас немає прав</i></p>}
                </div>
            </div>
        </div>
        </>         
    )
}

export default SetCase;