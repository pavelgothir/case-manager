import React from "react";
import {NavLink} from "react-router-dom";


const Nav = ()=>{
    
    return(
        <nav className={`top__menu__nav`}>
        <div>
            <NavLink to="/">Головна</NavLink>
        </div>
        <div>
            <NavLink to="/add-case">Додати кейс</NavLink>
        </div>
        <div>
            <NavLink to="/contacts">Контакти</NavLink>
        </div>
        <div>
            <NavLink to="/search">Розширений пошук</NavLink>
        </div>
    </nav>
    )
}


export default Nav;