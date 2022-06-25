import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards';
import AddCase from './components/Cases/Add-case/AddCase';
import Cases from './components/Cases/Cases';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='wrap__content'>
          <Routes>
            <Route path='/add-case' element={<AddCase />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/cases' element={<Cases />} />
            <Route index element={<Cards />} />
          </Routes>

        </div>

      </div>  
    </BrowserRouter>

  );
}

export default App;
