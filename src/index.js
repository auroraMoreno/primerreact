import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import Car from './components/Car';

ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <Car marca="Ponitac" modelo="Firebird" velMax="200"/>
    <Car marca="Porsche" modelo="M1" velMax="300"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
