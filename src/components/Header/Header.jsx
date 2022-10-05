import React, {useEffect, useState} from "react";

import logo from "../../img/logo.png";
import defoltProfile from "../../img/default_profile.png";
import arrow from "../../img/arrow.png";
import "./Header.css";
import Nav from "./Menu/Nav";
import Search from "./Menu/Search";
import { NavLink } from "react-router-dom";
import ShowLogin from "./ShowLogin";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../store/Slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import { serverAddres } from "../Functions/serverAddres";
import MenuProfile from "./Menu/MenuProfile";
const Header = ()=>{
    const localToken = localStorage.getItem("token");
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const [active, setActive] = useState(false);
    function openMenu(){
        setActive(!active);
        console.log(active)
    }
    if(window.location.pathname !== '/login'){
         fetch(serverAddres('check-auth.php'),{
        method:"POST",
        header : {'Content-Type': 'application/json;charset=utf-8'},
        body:  JSON.stringify({token:localToken})
    })
    .then(res => {
        return res.text();
    })
    .then(data =>{
        console.log(data)
        data = JSON.parse(data)
        if("message" in data){
            dispatch(removeUser())
        }
        if(data == "null"){
            console.log(data);
            dispatch(removeUser())
        }else{
            console.log(data)
        
        }
        
        
    })
    }
   

    return isAuth ?(
        <div className="wrapper__menu">
            
            <div className="top__menu__bottom">
            <div className="menu__logo">
                <img src={logo} alt="" />
            </div>
            <Search />
            <div className="menu__btn">
                <div className={`menu__btn__item ${active ? "active" : ""}` } id="menu__btn" onClick={openMenu}>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="menu__profile">
                <MenuProfile />
            </div>
        </div>
        <div className={`top__menu ${active ? "active" : ""}`} id="top__menu" onClick={()=>{
            setActive(!active);
        }}>
            <Nav />
            </div>
        </div>
    ):(
        <>
        <div className="wrapper__menu">
        <div className="top__menu__bottom">
        <div className="menu__logo">
                <img src={logo} alt="" />
            </div>
            </div>
            </div></>
    )
}

export default Header;