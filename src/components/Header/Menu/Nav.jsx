import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css"


const Nav = ({close}) => {
    
    return (
        <div className={s.wrap__nav} id="wrap__nav" onClick={(e)=>{
            if(e.target.id == "wrap__nav") close();   
            document.getElementById("nav__btn").classList.remove('active') 
        }}>
        <nav className={s.nav}>
            <div className={s.nav__inner}>

                <ul className={s.ul}>
                    
                    <li className={s.li}>
                        <NavLink className={s.a} onClick={close} to="/cases">Кейси</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.a} onClick={close} to="/add-case">Додати кейс</NavLink>

                    </li>
                    <li>
                        <NavLink className={s.a} onClick={close} to="/contacts">Телефонна книга</NavLink>

                    </li>
                    <li>
                        <NavLink className={s.a} onClick={close} to="/search">Розширений пошук</NavLink>

                    </li>
                    <li>
                        <NavLink className={s.a} onClick={close} to="/settings">Налаштування</NavLink>

                    </li>
                    <li>
                        <NavLink className={s.a} onClick={close} to="/resources">Ресурси</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}


export default Nav;