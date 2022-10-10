import React from "react";
import SetUser from "./SetUser/SetUser";
import "./settings.css"
import SetCategories from "./SetCase/SetCategories";
import SetContactCategory from "./SetContactCategory";
const Settings = ()=>{
    return(
        <div className="settings__page">
            <SetUser />
            <SetCategories />
            <SetContactCategory />
        </div>
        
    )
}
export default Settings;