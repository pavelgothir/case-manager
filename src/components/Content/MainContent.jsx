import React from "react";
import Login from "../Auth/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import AddCase from '../Cases/Add-case/AddCase';
import Cases from "../Cases/Cases";
import Case from "../Cases/Case/Case";
import Registration from "../Auth/Registration";
import Home from "../Home/Home";
import User from "../User/User";
import Settings from "../Settings/Settings";
import Recovery from "../Recovery/Recovery";
import Contacts from "../Contacts/Contacts";


const localToken = localStorage.getItem("token");

const MainContent = ()=>{
    return !!localToken ?(
        <div className='wrap__content'>
          <Routes>
            <Route path='/add-case' element={<AddCase />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/case' element={<Case />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route index element={<Home />} />
          </Routes>
        </div>
    ):(
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/recovery' element={<Recovery />} />
      </Routes>
       
    )
}

export default MainContent;