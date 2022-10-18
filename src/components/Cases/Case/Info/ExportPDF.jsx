import React from "react";
import axios from "axios";
import { useState } from "react";
import { serverAddres } from "../../../Functions/serverAddres";
const ShowPdf = ({link,pass}) =>{
    return(
        <div className="show__pdf__link">
            <p><a href={link} target="_blank">Переглянути ПДФ</a></p>
            <p>Пароль до файлу: <b>{pass}</b></p>
        </div>
    )
}
let objData = {
    plan:false,
    notes:false,
    media:false,
    help:false
}
const ExportPDF = ()=>{

    const [havePdf, setHavePdf] = useState({active:false,link:"",pass:""});

    function getPdf(){
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token"),
            caseID: window.location.search.slice(1),
            plan:objData.plan,
            notes:objData.notes,
            media:objData.media,
            help:objData.help
        }
        axios({
            url: serverAddres("mpdf/print.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
           console.log(data.data)
           setHavePdf(data.data);   
        })
        .catch((error)=>console.log(error)) 
    }


    return havePdf.active ?(
        <div className="export__pdf__wrap">
        <div className="export__pdf__inner">
            <ShowPdf link={havePdf.link} pass={havePdf.pass} />
        </div>
    </div>
    ):(
     
    <div className="export__pdf__wrap">
    <div className="export__pdf__inner">
        <p>Включити у ПДФ</p>
        <label htmlFor="pdf__plan"><input type="checkbox" id="pdf__plan"
        onChange={()=>{
            objData.plan = !objData.plan
        }} />Індивідуальний план</label>
        <label htmlFor="pdf__notes"><input type="checkbox" id="pdf__notes"
        onChange={()=>{
            objData.notes = !objData.notes
        }}/>Нотатки</label>
        <label htmlFor="pdf__help"><input type="checkbox" id="pdf__help"
        onChange={()=>{
            objData.help = !objData.help
        }}/>Надано допомогу</label>
        <label htmlFor="pdf__media"><input type="checkbox" id="pdf__media"
        onChange={()=>{
            objData.media = !objData.media
        }}/>Фотографії</label>
        <button onClick={()=>{
            getPdf()
        }}>Експорт у ПДФ</button>
    </div>
</div>
    )
}

export default ExportPDF;