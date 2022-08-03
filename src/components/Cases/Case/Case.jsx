import React, {useState, useEffect} from "react";
import PhotosForm from "./PhotosForm";
import Photo from "./Photo";
import CasePhoto from "./Info/CasePhoto";
import Loadpic from "../../Loading/Interactive/Loadpic";
import "./case.css"
import CaseShortInfo from "./Info/Caseshortinfo";
import JournalActive from "./Info/JournalActive";

const Case = (props)=>{
    const [post, setPost] = useState({id:"",contact:{caseName:""},photos:[]});

    useEffect(()=>{
        fetch("http://case.ua/get-case.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:JSON.stringify({"id":window.location.search.slice(1)})
            })
            .then(res => res.json())
            .then(res => {
               console.log(res)
               res.contact = JSON.parse(res.contact);
               res.activity = JSON.parse(res.activity);
               if(res.photos !== null){
                res.photos = JSON.parse(res.photos);
               }else{
                res.photos = [];
               }
               setPost(res)
            })
            .catch(rejected => {
                console.log("Помилка");
            });
    },[])
    
    return !!post.id ?(
        <div className="case__wrap">
        <div className="case__contact__info">
            <div>
                <CasePhoto url={`${post.contact.imgUrl}`}/>
            </div>
            <div><h1>{post.contact.caseName}</h1>
                <CaseShortInfo info = {post.contact}/>
            </div>     
        </div> 
        <div className="Journal__and__plan">
            <JournalActive info={post.activity} />
            <div></div>
        </div>
        <div className="media__content">
            <Photo photos = {post.photos}/>
        </div>    
            <PhotosForm photos = {post.photos}/>
        </div>
        
    ):(
        <>
            <Loadpic show={"active"} />
        </>
    )
}

export default Case;