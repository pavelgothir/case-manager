import React from "react";
import { createPortal } from "react-dom";
import {NavLink} from "react-router-dom";

const Nav = ()=>{
    const modaMenu = document.querySelector('#modal-menu');

    return createPortal(
        <nav className={`top__menu__nav`}>  
        <div>
            <NavLink to="/cases">Кейси</NavLink>
        </div>
        <div>
            <NavLink to="/add-case">Додати кейс</NavLink>
        </div>
        <div>
            <NavLink to="/contacts">Телефонна книга</NavLink>
        </div>
        {false ? <div>
            <NavLink to="/search">Розширений пошук</NavLink>
            
        </div>:""}
        <div>
        <NavLink to="/settings">Налаштування</NavLink>
        </div>
        <div>
        <NavLink to="/resources">Ресурси</NavLink>
        </div>
    </nav>,modaMenu
    )
}


export default Nav;