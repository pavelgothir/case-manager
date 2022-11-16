import React from "react";
import s from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import Cases from "../Cases/Cases";

const Home = ()=>{
    const dispatch = useDispatch();
    const {isAuth, email, data} = useAuth();
    
    return isAuth ? (
        <div>
            <h1 className={s.text__center}>Кейси</h1>
            <Cases />
        </div>
    ) : (
        <div className={s.home}>
           <p>
            <button onClick={()=> console.log(localStorage.getItem("username"))}>erfkrk</button>
           </p>
        </div>
    )
}
export default Home;