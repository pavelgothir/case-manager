import React from "react";
import Card from "./Card";

import "./cards.css";
const Cards = ()=>{
    const info = [{
        imgCase: "https://www.collinsdictionary.com/images/full/spider_630704852_1000.jpg",
        nameCase:"Петренко Василь Сергійович",
        phone:"0932080760",
        adress:"м. Київ, вул. Тернопільська, б. 28, кв. 77",
        email:"testemail@gmail.com",
        chanelCommunicate:"telegram",
        potreba:"Процес вилучення дитини з сім'ї, допомогти з ремонтом",
        statusCase: "orange",
        dateCase:"10-05-2022"
    },
    {
        imgCase: "https://www.collinsdictionary.com/images/full/spider_630704852_1000.jpg",
        nameCase:"Маргарита Глушко",
        phone:"0502287575",
        adress:"м. Київ, бул. Тичини, б. 28",
        email:"tesail@gmail.com",
        chanelCommunicate:"telegram",
        potreba:"Криза у сім'ї",
        statusCase: "green",
        dateCase:"10-05-2022"
    },
    {
        imgCase: "https://www.collinsdictionary.com/images/full/spider_630704852_1000.jpg",
        nameCase:"Дорошенко Юлія Денісівна",
        phone:"0448579685",
        adress:"м. Київ, вул. Черкаська, б. 28, кв. 77",
        email:"testemyyyyknail@gmail.com",
        chanelCommunicate:"viber",
        potreba:"Сирота, вступ до ВУЗу",
        statusCase: "red",
        dateCase:"10-05-2022"
    },
    {
        imgCase: "https://www.collinsdictionary.com/images/full/spider_630704852_1000.jpg",
        nameCase:"Петренко Олена Сергійович",
        phone:"0966680760",
        adress:"м. Київ, вул. Тернопільська, б. 28, кв. 77",
        email:"testemail@gmail.com",
        chanelCommunicate:"telegram",
        potreba:"Курси Англійської",
        statusCase: "orange",
        dateCase:"10-05-2022"
    },
    {
        imgCase: "https://www.collinsdictionary.com/images/full/spider_630704852_1000.jpg",
        nameCase:"Лук Лука Лукович",
        phone:"0932080760",
        adress:"м. Київ, вул. Тернопільська, б. 28, кв. 77",
        email:"testemail@gmail.com",
        chanelCommunicate:"viber",
        potreba:"Процес вилучення дитини з сім'ї, допомогти з ремонтом",
        statusCase: "green",
        dateCase:"10-05-2022"
    }]
    return(
        <div className="wrap__cards">
            <div className="inner__cards" id="inner__cards">
                
                <Card info = {info[0]}/>
                <Card info = {info[1]}/>
                <Card info = {info[2]}/>
                <Card info = {info[3]}/>
                <Card info = {info[4]}/>
            </div>
        </div>
    )
}

export default Cards;