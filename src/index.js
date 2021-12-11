import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

//initializing the localstorage
if (!localStorage.getItem("users")) {
  localStorage.setItem("users","")
}
if (!localStorage.getItem("id")) {
  localStorage.setItem("id",0)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

