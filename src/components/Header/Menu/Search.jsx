import { render } from "@testing-library/react";
import React from "react";
import ReactDOM  from "react-dom";
import Card from "../../Cards/Card";
import Func from ".";
const Search = ()=>{
    const rootElement = document.getElementById('inner__cards');
    return(
        <div className="menu__search">
                <div className="menu__search__input">
                    <div className="menu__search__input__inner">
                        <img src="img/search.png" alt="" />
                        <input type="text" name="" id="" onChange={(val)=>{
                            console.log(val.target.value)
                            Func()
                            render(
                                
                                    <Card />
                                ,document.getElementById('inner__cards')
                            )
                            
                        
                        
                        }} placeholder="Пошук..." />
                    </div>
                </div>
            </div>
    )
}
export default Search;