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
                        
                        <p title="Номер телефону 1"><a href={`tel:${info.phone1}`}>{info.phone1}</a></p>
                    </div>
                </div>
                {info.phone2.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p><a href={`tel:${info.phone2}`}>{info.phone2}</a></p>
                    </div>
                </div>:""
                }
                <div className="case__info__card">
                    <div className="case__info__card__img">
                        <img src={emailImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p><a href={`mailto:${info.email}`}>{info.email}</a></p>
                    </div>
                </div>
                
            </div>
          
            <div className="case__info__inner">
            <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p title="Адреса по прописці">{info.addressPropiska}</p>
                    </div>
                </div>
                {info.addressLive.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p title="Фактична адреса проживання">{info.addressLive}</p>
                    </div>
                </div>:""}
                {info.familyStan.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p title="Сімейний стан">{info.familyStan}</p>
                    </div>
                </div>:""}
                {info.commentar.length > 1 ? <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p title="Коментар">{info.commentar}</p>
                    </div>
                </div>:""}
                {info.potreba.length > 1 ?
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={givingImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p>{info.potreba}</p>
                    </div>
                </div>:""}
            </div>           
            <div className="case__info__inner">
                <div className="case__info__text__center">
                    <p>Дата створення</p>
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={dateImg} alt="" />
                        </div>
                        <div className="case__info__card__text">
                            
                            <p>{info.createdDate}</p>
                        </div>
                    </div>   
                </div>
                <div className="case__info__text__center">                             
                <p>Договір</p>
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">     
                            <p>{info.numberDogovir < 1 ? "Договір не укладено" : info.dateDogovir + " № " + info.numberDogovir }</p>
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                <p>Канал комунікації</p>
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">     
                            <p>{info.chanelComunity}</p>
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                <p>Категорія</p>
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">     
                            <p><ShowCategories cats = {info.categories}/></p>
                        </div>
                    </div>
                </div>
                <div className="case__info__text__center">                             
                <p>Статус</p>
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={givingImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p>{info.status}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CaseShortInfo;