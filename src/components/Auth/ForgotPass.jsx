import React from "react";
import axios from "axios";
import { useState } from "react";
import { serverAddres } from "../Functions/serverAddres";

const ForgotPass = ()=>{
    const [email,setEmail] = useState("")

    function forgotPass(mail){
        axios({
            url: serverAddres("user/forget-pass.php"),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify({email:mail}),
        })
        .then((data)=>{ 
            console.log(data.data)
          // window.location.reload()        
        })
        .catch((error)=>console.log(error))  
    }

    return(
        <div className="forget__form"> 
           <h2>Форма відновлення</h2>
            <input type="text"
                placeholder="Ваш Email..."
                value={email}
                onChange={(e)=>{
                setEmail(e.target.value)
                console.log(email)
            }}/>
            <button onClick={()=>{
                forgotPass(email)
            }}>Відновити</button>
        </div>
    )
}
export default ForgotPass;