import React, { Component, useState, setState } from "react";
import Card from "../Cards/Card";
import s from "./Cases.module.css";

const ErrorConnect = ({active, text})=>{
    if(active){
       return(
        <div className="__error">
            <h1>{text}</h1>
        </div>
    ) 
    }
}
const PostsData = ({post})=>{
    console.log(post)
    return (
            <Card info={post} />
    )
}
let casePost = "";
const Posts = (pos)=>{
    if(pos.length < 1) return;
        casePost =  pos.map((post,index)=>{
            post = JSON.parse(post);
            return <PostsData key={index} post={post}/>
    })  
}
const Cases = ()=>{
    const [posts, setPosts] = useState("");
    let connect = {
        active: true,
        text:""
    }
    async function getCases(){

        await fetch("http://case.ua/get-cases.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:JSON.stringify({"num":posts.length})
            })
            .then(res => res.json())
            .then(res => {
               return setPosts(res);
            })
            .catch(rejected => {
                console.log("Помилка");
                connect.active = false;
                connect.text = "Помилка з'єднання з базою даних"
            });
            
}
    getCases()
    return (    
        <>
        <div className="wrap__cards">
            <div className="inner__cards" id="inner__cards">  
                {Posts(posts)}
                {casePost}
            </div>
            </div>
        </>
    )
}


export default Cases;