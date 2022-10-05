import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/Slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import {NavLink} from "react-router-dom";
import { Check } from "../Auth/Check";

const ShowLogin = ()=>{
    const dispatch = useDispatch();
    const {isAuth, email, data, userName, id} = useAuth();
    return isAuth ? (
            <div className="prof__access__header">
                <div><NavLink className={"prof__access__header__link"} to={`/user?${id}`}> {userName} </NavLink></div>
                <div><button onClick={()=> dispatch(removeUser())}>Вийти</button></div>
            </div>
    ) : (
            <div className="access__header">
                <div><NavLink className={"prof__access__header__link"} to={"logIn"}> Увійти </NavLink></div>
            </div>
    )
}
export default ShowLogin;