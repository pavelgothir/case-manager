import React from "react";
import SetUser from "./SetUser/SetUser";
import "./settings.css"
import SetCategories from "./SetCase/SetCategories";
import SetContactCategory from "./SetContactCategory";
const Settings = ()=>{
    return(
        <div className="page">
             <div className="page__title">
                <h1>Налаштування</h1>
            </div>
            <div className="settings__page">
            <SetUser />
            <SetCategories />
            <SetContactCategory />
        </div>
        
        </div>
       
    )
}
export default Settings;