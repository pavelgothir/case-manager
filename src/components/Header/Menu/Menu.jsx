import React from "react";
import s from "./Menu.module.css";
import {NavLink} from "react-router-dom"
const Menu = ()=>{
    return (
        <div className={s.menu}>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/cases">Кейси</NavLink>
            </div>
        </div>
    );
}
export default Menu;