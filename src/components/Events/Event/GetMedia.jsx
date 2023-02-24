import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImgFormat from "../../Functions/ImgFormat";
import { serverAddres } from "../../Functions/serverAddres";
import downloadImg from "./../../../img/icons/downloading-50.png"
import s from "./get-media.module.css";
import VideoPlayer from "react-video-js-player";
const GetMedia = ({id,media})=>{
    
    return(
        <div className={s.file__wrap}>
            <h2>Завантажені медіа файли</h2>
            <div className={s.img__inner}>
                {
                    media.map((item,index)=>{
                        if(item.format.toLowerCase() == "png" || item.format.toLowerCase() == "jpeg" || item.format.toLowerCase() == "jpg" || item.format.toLowerCase() == "ico"){
                            return(
                                <div  key={item.link + index}><img src={item.link} alt="" /></div>
                            )
                        }else{
                            return(
                                <div key={item.link + index} >
                                    <VideoPlayer className={s.video} src={item.link} />
                                </div>
                                
                            )
                        }     
                    })
                }
            </div>
        </div>
    )
}

export default GetMedia;