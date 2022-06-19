import React from 'react';
import  render from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cases from './components/Cases/Cases';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className='wrap__content'>
          <Routes>
            <Route path='/' component={Home} />
            <Route path='/cases' element={<Cases />} />
            <Route
      index                                    // <-- "/"
      element={<div>Default Page Content</div>}
    />
          </Routes>

        </div>
      </div>  
    </BrowserRouter>

  );
}

export default App;
