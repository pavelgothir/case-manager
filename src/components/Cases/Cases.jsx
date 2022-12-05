import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Cards/Card";
import { serverAddres } from "../Functions/serverAddres";
import LoadingPage from "../Loading/LoadingPage";

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
    const [page, setPage] = useState(
        {
            loading:true,
            cases:false,
            message:""
        }
    )
    useEffect(()=>{
        let obj = {
            id: localStorage.getItem("id"),
            token: localStorage.getItem("token")
        }
        axios({
            url: serverAddres('get-cases.php'),
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((data)=>{ 
            console.log(data.data)
           // return console.log(data.data)
            if(data.data?.message){
                setPage(
                    {
                        effload:false,
                        message: data.data.message,
                        loading:true
                    }
                )
            }else if(data.data.length == 0){
                setPage(
                    {
                        effload:false,
                        message: "Немає доступних кейсів",
                        loading:true
                    }
                ) 
            }else{
                setPosts(data.data)  
                setPage({
                    loading:false
                })
            }
        })
        .catch((error)=>console.log(error)) 
 
    },[])
    return page.loading ? (    
        <div className="page__loading">
            <LoadingPage message={page.message} effload = {page.effload}/>
        </div>
    ):(
            <div className="wrap__cards">
            <div className="inner__cards" id="inner__cards">  
                {Posts(posts)}
                {casePost}
            </div>
            </div>
    )
}


export default Cases;