import React from "react";
import s from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import Cases from "../Cases/Cases";
import Statistic from "./Statistic/Statistic";

const Home = ()=>{
    const dispatch = useDispatch();
    const {isAuth, email, data} = useAuth();
    return isAuth ? (
        <div>
            <h1 className={s.text__center}>СТАТИСТИКА</h1>
            <Statistic />
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