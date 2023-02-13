import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AmountCases, getCasesHappy, getCategoriesStat, getSize } from "../../../services/statistic-api";
import LoadingPage from "../../Loading/LoadingPage";
import LineG from "./Graphics/LineG";
import Circle from "./Graphics/Circle";

import s from "./statistics.module.css"
import DoughnutB from "./Graphics/DoughnutB";
const bib =  {
  labels: [],
  datasets: [{
      label: 'Кількість категорій кейсів',
      data: [],
      borderWidth: 1,
      backgroundColor: [],
    }]
}
function dadaFunction(texts){
  let babels = [];
  let datas = [];
  let colors = [];
  console.log(texts.length)
  for(let i = 0; i < Object.keys(texts).length; i++){
    babels[i] = texts[Object.keys(texts)[i]].text;
    datas[i] = texts[Object.keys(texts)[i]].count;
    colors[i] = texts[Object.keys(texts)[i]].color;
  }
  console.log(babels)
  bib.labels = babels;
  bib.datasets[0].data = datas;
  bib.datasets[0].backgroundColor = colors;

  console.log(bib)
  return true;

}

      const options = {
        maintainAspectRatio:true,
        responsive:true,
        aspectRatio:2
      }
      const a = [];
const Statistic = () =>{
    const [amountCases, setAmountCases] = useState(null);
    const [size, setSize] = useState(null);
    useEffect(()=>{
        AmountCases().then((res) => {
            if(res?.message) return console.log(res)
            var arr = res.mas;
            var result = {};
            var texts = {}
            arr.forEach(function(a){
                result[a.value] = result[a.value] + 1 || 1;        
                texts[a.value] = {
                  text : a.text,
                  value : a.value,
                  color : a.color,
                  count : result[a.value]
                }           
            });
            dadaFunction(texts)
            setAmountCases(res.count);
            });
        getSize().then((res) =>{
          if(res?.message) return console.log(res)
          setSize( {
            labels: ['Вільно','Зайнято'],
            datasets: [{
                label: 'MB',
                data: [res.maxSize - res.size,res.size],
                borderWidth: 1,
                backgroundColor: ["#9ccef9","#f99c9c"],
              }]
          })
        })
        getCategoriesStat().then((data) => {
          console.log(data)
        });
        getCasesHappy().then((data) => {
          console.log(data)
        });
    },[])
   
    return (
        <div className={s.home__statistic}>
            <div className={s.amount__cases__wr}>
                <h2>Кількість унікальних кейсів у програмі <span className={s.amount}>{amountCases}</span></h2>
                <h2>Графік категорій</h2>
                <div className={s.stats__grid}>
                   {size == null ? "":<DoughnutB data={size} options={options}/>}
                    {amountCases == null ? "":<LineG data={bib} options = {options}/>}
                    {amountCases == null ? "":<Circle data={bib} options = {options}/>}
                </div>
                
                <div className="page__loading">
                    <LoadingPage effload={false} message = "Тут буде відображатися Статистика загальна та по всій Україна. Розділ СТАТИСТИКА у процесі розробки" /> 
                </div>                
            </div>
        </div>
    )
}

export default Statistic;