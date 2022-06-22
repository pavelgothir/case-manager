import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cases from './components/Cases/Cases';
import Header from './components/Header/Header';


function App() {
 /* const [t1, setT1] = useState('');
  function clickHandler(){

    fetch("http://case.ua/",{
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body : JSON.stringify({action:1})
    })
    .then (response => response.text())
    .then (response =>{
      console.log(response);
      setT1(response);
    })
  }
  
          <button onClick = {clickHandler}>Gogo</button>
        <div>{t1}</div>
  */
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='wrap__content'>
          <Routes>
            <Route path='/cases' element={<Cases />} />
            <Route index element={<div>Default Page Content</div>} />
          </Routes>

        </div>

      </div>  
    </BrowserRouter>

  );
}

export default App;
