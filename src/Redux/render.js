import React from "react";

import ReactDOM from 'react-dom/client';
import '../index.css';
import App from "../components'/App";
import reportWebVitals from '../reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from "./State";




export let rerenderEntireTree =(MassagePost)=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <React.StrictMode>
      
          <App  
           MassagePost={MassagePost}
           addPost= {addPost}
            

           />
       
      </React.StrictMode>
      </BrowserRouter>
    );
    
  }
  


