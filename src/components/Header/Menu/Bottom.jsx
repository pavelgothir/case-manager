import React, {useState} from "react";
import Search from "./Search";
import logo from "../../../img/logo.png";
import defoltProfile from "../../../img/default_profile.png";
import arrow from "../../../img/arrow.png";


const Bottom = ()=>{
    const [active, setActive] = useState("false");
    function openMenu(){
        setActive(!active);
        console.log(active)
    }
    return(
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
                <img src={defoltProfile} alt="" />
            </div>
        </div>
    )
}
export default Bottom;