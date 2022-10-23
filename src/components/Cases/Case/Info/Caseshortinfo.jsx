import React from "react";
import phoneImg from "../../../../img/icons/iphone-90.png"
import socialImg from "../../../../img/icons/social-100.png"
import givingImg from "../../../../img/icons/giving-100.png"
import emailImg from "../../../../img/icons/email-100.png"
import addressImg from "../../../../img/icons/address-100.png"
import dateImg from "../../../../img/icons/date-100.png"

function ShowCategories({cats}){
    console.log(cats)
    let cat = ""
    for(let i = 0; i < cats.length; i++){
        cat += cats[i].text;
    }
    return cat;
}

const CaseShortInfo = ({info})=>{
    console.log(info)
    return(
        <div className="case__info">
            <div className="case__info__inner">
                <div className="case__info__card">
                    <div className="case__info__card__img">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        
                       <span><p title="Номер телефону 1"><a href={`tel:${info.phone1}`}>{info.phone1}</a></p></span>
                    </div>
                </div>
                {info.phone2.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p><a href={`tel:${info.phone2}`}>{info.phone2}</a></p></span>
                    </div>
                </div>:""
                }
                <div className="case__info__card">
                    <div className="case__info__card__img">
                        <img src={emailImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span>
                            <p><a href={`mailto:${info.email}`}>{info.email}</a></p>
                        </span>
                        
                    </div>
                </div>
                
            
          
            
            <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p title="Адреса по прописці">{info.addressPropiska}</p></span>
                    </div>
                </div>
                {info.addressLive.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p title="Фактична адреса проживання">{info.addressLive}</p></span>
                    </div>
                </div>:""}
                {info.familyStan.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p title="Сімейний стан">{info.familyStan}</p></span>
                    </div>
                </div>:""}
                {info.commentar.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p title="Коментар">{info.commentar}</p></span>
                    </div>
                </div>:""}
                {info.potreba.length > 1 ?
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={givingImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <span><p title="Потреба">{info.potreba}</p></span>
                    </div>
                </div>:""}
            </div>           
            <div className="case__info__inner">
                <div className="case__info__text__center">
                    
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={dateImg} alt="" />
                        </div>
                        <div className="case__info__card__text">
                            <p>Дата створення</p>
                            <span>
                                <p>{info.createdDate}</p>
                            </span>
                            
                        </div>
                    </div>   
                </div>
                <div className="case__info__text__center">                             
                
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">   
                            <p>Договір</p>
                            <span>
                                <p>{info.numberDogovir < 1 ? "Договір не укладено" : info.dateDogovir + " № " + info.numberDogovir }</p>                                
                            </span> 
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">  
                            <p>Канал комунікації</p>   
                            <span><p>{info.chanelComunity}</p></span>
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text"> 
                            <p>Категорія</p>    
                            <span><p><ShowCategories cats = {info.categories}/></p></span>
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={givingImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p>Статус</p>
                        <span><p>{info.status}</p></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CaseShortInfo;