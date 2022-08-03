import React from "react";
import Login from "../Auth/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import AddCase from '../Cases/Add-case/AddCase';
import Cases from "../Cases/Cases";
import Case from "../Cases/Case/Case";
import Registration from "../Auth/Registration";
import Home from "../Home/Home";
import { Check } from "../Auth/Check";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Slices/userSlice";
import { useAuth } from "../../hooks/use-auth";
import User from "../User/User";


const localToken = localStorage.getItem("token");
const check = !!localToken;

const MainContent = ()=>{
    const dispatch = useDispatch();
    const {isAuth, email, data, token, id} = useAuth();

   /* async function getUser(){
        await fetch("http://case.ua/check-auth.php",{
            method:"POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            body:  JSON.stringify({token:localToken})
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if(data){
                    dispatch(setUser({
                        isAuth:true,
                        email:"teenitclub@gmail.com",
                        id: 2,
                        token: localToken,
                        data:{userName:"Admin"}
                    }))
                }else{
                    localStorage.setItem("token", null)
                }
               
               // window.location.href =""
            })
            .catch(rejected => {
                console.log(localToken);
            });   
    }
    */
    return !!localToken ?(
        <div className='wrap__content'>
          <Routes>
            <Route path='/add-case' element={<AddCase />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/case' element={<Case />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
            <Route index element={<Home />} />
          </Routes>
        </div>
    ):(
        <Login />
    )
}

export default MainContent;