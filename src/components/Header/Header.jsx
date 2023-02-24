import React, { useEffect, useState } from "react";

import logo from "../../img/logo.png";
import phoneImg from "./../../img/icons/phonebook-48.png";
import addCaseImg from "./../../img/icons/add-user-64.png";
import eventImg from "./../../img/icons/calendar-64-white.png"
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

import ModalErrorConnection from "../Modals/ModalErrorConnection";
import Bell from "./Menu/Bell";
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
          data = data.data;
          if ("message" in data) {
            dispatch(removeUser());
            console.log(data,125);
          }
          if (data == "null") {
            console.log(data,125);
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
                <div className={s.logout}>
                    <NavLink className={s.a} to="/add-case"><img className={s.logout} src={addCaseImg} alt="" /></NavLink>
                </div>
                <div className={s.profile}> 
                  <NavLink className={s.a} to="/contacts"><img className={s.logout} src={phoneImg} alt="" /></NavLink>
                </div>
                <div className={s.event}> 
                  <NavLink className={s.a} to="/events"><img className={s.logout} src={eventImg} alt="" /></NavLink>
                </div>
                
        </div>
        
        <div className={s.control}>
        <Menu active={active} close={()=>{setActive(!active) 
          return !active}} />
          <Bell />
          </div>
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
