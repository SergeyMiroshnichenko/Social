import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import "./components'/App.css";
import App from "./App";
import store from "./Redux/State"
import MassagePost from "./Redux/State"



 let rerenderEntireTree =(_MassagePost) => {
     const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <React.StrictMode>
      
          <App  
           MassagePost={MassagePost}
           dispatch= {store.dispatch.bind(store)}
           />
       
      </React.StrictMode>
      </BrowserRouter>
    );
    
  }
  



rerenderEntireTree(store.getMassagePost())
store.subscribe (rerenderEntireTree)