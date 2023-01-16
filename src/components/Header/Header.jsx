import React, { useEffect, useState } from "react";

import logo from "../../img/logo.png";
import arrow from "../../img/arrow.png";
import "./Header.css";
import Nav from "./Menu/Nav";
import Search from "./Menu/Search";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../store/Slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import { serverAddres } from "../Functions/serverAddres";
import MenuProfile from "./Menu/MenuProfile";
import axios from "axios";
import ModalErrorConnection from "../Modals/ModalErrorConnection";
import s from "./header.module.css";
import Menu from "./Menu/Menu";
const Header = () => {
  const [errorNet, setErrorNet] = useState(null);
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [active, setActive] = useState(false);
  function openMenu() {
    setActive(!active);
    console.log(active);
  }
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
    /*
      fetch(serverAddres("check-auth.php"), {
        method: "POST",
        header: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({ token: localToken }),
      })
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          // console.log(data)
          data = JSON.parse(data);
          if ("message" in data) {
            dispatch(removeUser());
          }
          if (data == "null") {
            console.log(data);
            dispatch(removeUser());
          } else {
            // console.log(data)
          }
        }).catch((error)=>{
          console.log(error)
        })*/
  }

  return isAuth ? (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img className={s.logo__img} src={logo} alt="" />
        </div>
        <Menu />
      </div>
    </header>
  ) : null
};

export default Header;
