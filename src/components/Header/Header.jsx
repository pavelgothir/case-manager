import React, { useEffect, useState } from "react";

import logo from "../../img/logo.png";
import arrow from "../../img/arrow.png";
import "./Header.css";
import Nav from "./Menu/Nav";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../store/Slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import { serverAddres } from "../Functions/serverAddres";
import axios from "axios";
import s from "./header.module.css";
import Menu from "./Menu/Menu";
import SearchMenu from "./Menu/SearchMenu";
import profileImg from "./../../img/icons/cat-profile-50.png"
import logoutImg from "./../../img/icons/logout-50.png"
import ModalErrorConnection from "../Modals/ModalErrorConnection";
const Header = () => {
  const [errorNet, setErrorNet] = useState(null);
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [active, setActive] = useState(false);
  useEffect(()=>{
    if (window.location.pathname !== "/login") {
      axios({
        url: serverAddres("check-auth.php"),
        method: "POST",
        header: { 'Content-Type': 'application/json;charset=utf-8' },
        data: JSON.stringify({ token: localToken }),
      })
        .then((data) => {
          if ("message" in data) {
            dispatch(removeUser());
          }
          if (data == "null") {
            console.log(data);
            dispatch(removeUser());
          } else {
            // console.log(data)
          }
        })
        .catch((error) => setErrorNet(error))
      }
  },[])
  
  

  return isAuth ? (
    <div className={s.wrap__header}>
      {errorNet ? <ModalErrorConnection error={errorNet} func={()=>{
        setErrorNet(null)
      }}/>:null}
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <NavLink to={'/'}><img className={s.logo__img} src={logo} alt="" /></NavLink>
        </div>
        <SearchMenu />
        <div className={s.control} >
            <a className={s.a} href={`/user?${localStorage.getItem("id")}`}><img src={profileImg} alt="" /></a>
        </div>
        <div className={s.control}>
        <NavLink className={s.a} onClick={()=>{dispatch(removeUser())}} to="/login"><img className={s.logout} src={logoutImg} alt="" /></NavLink>
        </div>
        
        
        <Menu active={active} close={()=>{setActive(!active) 
          return !active}} />
      </div>
    </header>
    {active ? <Nav  close={()=>{setActive(!active)}}/> : null}
    </div>
  ) : (
    <div className={s.wrap__header}>
  <header className={s.header}>
    <div className={s.container}>
      <div className={s.control}>
      <NavLink className={s.a} to="/login"> Увійти до програми</NavLink>
      </div>
    </div>
  </header>
  </div>
  )
};

export default Header;
