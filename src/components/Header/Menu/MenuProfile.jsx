import React from "react";
import { NavLink } from "react-router-dom";
import ShowLogin from "../ShowLogin";
import Search from "./Search";
import defoltProfile from "../../../img/default_profile.png";
import { useState } from "react";

const MenuProfile = ()=>{
    const [profileMenu, setProfileMenu] = useState(false);
    return(
        <div className="menu__profile__wrap">
            <img src={localStorage.profilePhoto == 'null' ? defoltProfile : localStorage.profilePhoto } onClick = {()=>{
                setProfileMenu(!profileMenu)
            }} alt="" />
            
            {profileMenu ? <div className="menu__profile__inner">
                <ShowLogin />
            </div> : <></>}
        </div>
        
    )
}
export default MenuProfile;