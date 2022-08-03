import React from "react";
import s from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/Slices/userSlice";


const Home = ()=>{
    const dispatch = useDispatch();
    const {isAuth, email, data} = useAuth();
    console.log(isAuth, email)
    console.log(data)
    return isAuth ? (
        <div>
            <h1>Hello</h1>

            <button onClick={()=> dispatch(removeUser())}>Log out {email}</button>
        </div>
    ) : (
        <div className={s.home}>
           <p>
            kkkkk
            <button onClick={()=> console.log(localStorage.getItem("username"))}>erfkrk</button>
           </p>
        </div>
    )
}
export default Home;