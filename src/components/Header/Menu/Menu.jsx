import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./menu.module.css"
import Nav from "./Nav";

const Menu = ()=>{
    const [active,setActive] = useState(false);
    return (
        <div className={s.btn__wrap} onClick={()=>{
            setActive(!active)
            console.log(active)
        }}>
            <div className={active ? `${s.btn} ${s.active}` : s.btn}>
                <span className={s.f__l}></span>
                <span className={s.s__l}></span>
                <span className={s.t__l}></span>
                <span className={s.fo__l}></span>
            </div>
            {active ? <Nav />: null}
        </div>
    )
}

export default Menu;