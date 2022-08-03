import React from "react";
import phoneImg from "../../../../img/icons/iphone-90.png"
import socialImg from "../../../../img/icons/social-100.png"
import givingImg from "../../../../img/icons/giving-100.png"
import emailImg from "../../../../img/icons/email-100.png"
import addressImg from "../../../../img/icons/address-100.png"
import dateImg from "../../../../img/icons/date-100.png"

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
                        <p><a href={`tel:${info.phone1}`}>{info.phone1}</a></p>
                    </div>
                </div>
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p><a href={`tel:${info.phone2}`}>{info.phone2}</a></p>
                    </div>
                </div>
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
                        <p>{info.address}</p>
                    </div>
                </div>
                <div className="case__info__card">
                <div className="case__info__card__img">
                        <img src={givingImg} alt="" />
                    </div>
                    <div className="case__info__card__text">
                        <p>{info.potreba}</p>
                    </div>
                </div>
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
                <p>Канал комунікації</p>
                    <div className="case__info__card">
                        <div className="case__info__card__img">
                            <img src={socialImg} alt="" />
                        </div>
                        <div className="case__info__card__text">     
                            <p>{info.chanel}</p>
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