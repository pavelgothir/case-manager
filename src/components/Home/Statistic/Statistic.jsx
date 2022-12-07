import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AmountCases } from "../../../services/statistic-api";
import LoadingPage from "../../Loading/LoadingPage";

const Statistic = () =>{
    const [amountCases, setAmountCases] = useState("")
    useEffect(()=>{
        AmountCases().then((data) => {
            console.log(data)
            setAmountCases(data);
          });
        //setAmountCases(AmountCases)
    },[])
    return (
        <div className="home__statistic">
            <div className="amount__cases__wr">
                <h2>Кількість кейсів у програмі <span className="amount">{amountCases}</span></h2>
                
                <div className="page__loading">
                    <LoadingPage effload={false} message = "Тут буде відображатися Статистика загальна та по всій Україна. Розділ СТАТИСТИКА у процесі розробки" /> 
                </div>                
            </div>
        </div>
    )
}

export default Statistic;