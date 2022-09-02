import React from "react";
import {NavLink} from 'react-router-dom';
import './cards.css';
const Card = (props)=>{
    return (
        <div className="card">
            <div className="card__img">
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
                    <div className="card__info__status__on">
                        <p className={`status__color`}>{props.info.status}</p>
                    </div>
                    <div className="card__info__status__date">
                        <p>{props.info.createdDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;