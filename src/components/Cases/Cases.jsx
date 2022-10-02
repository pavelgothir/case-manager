import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Cards/Card";
import { serverAddres } from "../Functions/serverAddres";

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
    useEffect(()=>{
        fetch(serverAddres('get-cases.php'))
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setPosts(data)
            console.log(data)
        })
    },[])
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