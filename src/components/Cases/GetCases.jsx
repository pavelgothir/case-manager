import React from "react";
import Card from "../Cards/Card";
import s from "./Cases.module.css";
function sortMas(field,type){
    if(type == "number"){
        return(a,b) => +a[field] > +b[field] ? 1 : -1;
    }else{
        return(a,b) => a[field] > b[field] ? 1 : -1;
    } 
}
const GetCases = ({posts,postsChange})=>{
    return(
        <div className="wrap__cards">
          <div className={s.select__sort}><select name="" id="" onChange={(e)=>{
            console.log(e.target.value)
            let a = [];
            if(e.target.value !== 'id'){
              posts.sort(sortMas(e.target.value,'string'))
            }else{
            posts.sort(sortMas(e.target.value,'number'))
            }
            posts.forEach(element => {
              a.push(element)
            });
            console.log(a)
             postsChange(a)
          }}>
            <option value="default">Сортувати за</option>
            <option value="surname">Сортувати за прізвище</option>
            <option value="firstName">Сортувати за ім'ям</option>
            <option value="createdDate">Сортувати за датою створення</option>
            <option value="id">Сортувати за номером</option>
          </select>
          </div>
            <div className="inner__cards" id="inner__cards">
                {posts.map((elem,ind)=>{
                    return <Card info={elem} key={elem.id  + Math.random() * 50000 }/>
                })}
            </div>
        </div>
    )
}

export default GetCases;