import React from "react";
import s from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/Slices/userSlice";
import Cases from "../Cases/Cases";
import { useEffect } from "react";
import axios from "axios";
import { serverAddres } from "../Functions/serverAddres";

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