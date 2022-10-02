import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import './cards.css';
let categoriesStr = "";

  
const Card = (props)=>{

    const CategoriesData = ({category, index})=>{
        console.log(category)
        return (
        <div className="category__circle" title={category.text} style={{backgroundColor: category.color}}>

        </div>
        )
    }
    const CategoriesMas = ({pos})=>{
        console.log(Array.isArray(pos))
        if(!Array.isArray(pos) || pos == false) return;
        categoriesStr =  pos.map((post,index)=>{
        return <CategoriesData key={index} category={post} index={index}/>
        })  
        return categoriesStr;
    } 


    console.log(props)

    return(
        <div className="card">
            <div className="card__img">
                <div className="card__categories">
                       <CategoriesMas pos = {props.info.categories == undefined ? false : props.info.categories}/> 
                       
                </div>
                <img src={`${ props.info.imgUrl}`} alt="" />
            </div>
            <div className="card__info">
                <div className="card__case__name">
                    <h2><NavLink to={"/case?" + props.info.id}>{`${props.info.surname} ${props.info.firstName} ${props.info.secondName}`}</NavLink></h2>
                </div>
                <div className="card__description">
                <p>{props.info.phone1}</p>
                <p>{props.info.phone2}</p>
                <p>{props.info.email}</p>
                <p>{props.info.address}</p>
                <p>{props.info.chanel}</p>
                <p>{props.info.potreba}</p>
                </div>
                <div className="card__info__status">
                    <div></div>
                    <div className="card__info__status__date">
                        <p>{props.info.createdDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;