import axios from "axios";
import { serverAddres } from "./serverAddres";

let obj = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("token"),
}

export function get_apiObj(setState,url,objData){
    objData = {...objData,...obj};
   // return console.log(objData)
    axios({
        url: serverAddres(url),
        method: "POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        data : JSON.stringify(objData),
    })
    .then((data)=>{ 
       setState(data.data) 
    })
    .catch((error)=>console.log(error)) 
}