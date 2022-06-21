import React from "react";
import Bottom from "./Menu/Bottom";
import Top from "./Menu/Top";
import "./Header.css";
const Header = ()=>{
    return(
        <div className="wrapper__menu">
            <Top />
            <Bottom />
        </div>
    )
}

export default Header;