import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Cards from './components/Cards/Cards';
import AddCase from './components/Cases/Add-case/AddCase';
import Case from './components/Cases/Case/Case';
import Cases from './components/Cases/Cases';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <useLocation to="/login" />
      <div className="App">
        <Header />
        <div className='wrap__content'>
          <Routes>
            <Route path='/add-case' element={<AddCase />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/case' element={<Case />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route index element={<Cards />} />
            <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
          </Routes>

        </div>

      </div>  
    </BrowserRouter>

  );
}

export default App;
