import React from "react";

const Card = (props)=>{
   console.log(props)
    return (
        <div className="card">
            <div className="card__img">
                <img src={`${props.info.imgCase}`} alt="" />
            </div>
            <div className="card__info">
                <div className="card__case__name">
                    <h2>{props.info.nameCase}</h2>
                </div>
                <div className="card__description">
                <p>{props.info.phone}</p>
                <p>{props.info.email}</p>
                <p>{props.info.adress}</p>
                <p>{props.info.chanelCommunicate}</p>
                <p>{props.info.potreba}</p>
                </div>
                <div className="card__info__status">
                    <div className="card__info__status__on">
                        <p className={`status__color ${props.info.statusCase}`}></p>
                    </div>
                    <div className="card__info__status__date">
                        <p>{props.info.dateCase}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;