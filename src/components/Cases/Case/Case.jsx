import React, {useState} from "react";

const test = (props)=>{
    return (
        <>
            {props.name.caseName}
        </>
    )
}



const Case = (props)=>{
    const [post, setPost] = useState({id:"1",contact:{caseName:""}});
    function go(id){
        getCase()
        async function getCase(){
            await fetch("http://case.ua/get-case.php",{
                method:"POST",
                header : {'Content-Type': 'application/json;charset=utf-8'},
                body:JSON.stringify({"id":id})
                })
                .then(res => res.json())
                .then(res => {
                   console.log(res)
                   res.contact = JSON.parse(res.contact);
                   setPost(res)
                })
                .catch(rejected => {
                    console.log("Помилка");
                });
                
    }
    }
    
    return (
        <div><h1>Ім'я - {props.name}{post.contact.caseName}</h1>
            {go(window.location.search.slice(1))}
        </div>
    )
}

export default Case;