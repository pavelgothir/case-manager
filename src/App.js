import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import {store } from './store';
import {Provider} from 'react-redux';
import MainContent from './components/Content/MainContent';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainContent />
      </div>  
      </Provider>
    </BrowserRouter>
  );
}

export default App;
