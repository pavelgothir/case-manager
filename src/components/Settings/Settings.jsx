import React from "react";
import SetUser from "./SetUser/SetUser";
import "./settings.css"
import SetCategories from "./SetCase/SetCategories";
const Settings = ()=>{
    return(
        <div className="settings__page">
            <SetUser />
            <SetCategories />
        </div>
        
    )
}
export default Settings;