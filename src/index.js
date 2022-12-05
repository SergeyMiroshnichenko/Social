import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import "./components'/App.css";
import App from "./App";
import store from "./Redux/State"
import _state from "./Redux/State"



 let rerenderEntireTree =(_state) => {
     const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <React.StrictMode>
      
          <App  
           state={_state}
           dispatch= {store.dispatch.bind(store)}
           />
       
      </React.StrictMode>
      </BrowserRouter>
    );
    
  }
  



rerenderEntireTree(store.getMassagePost())
store.subscribe (rerenderEntireTree)