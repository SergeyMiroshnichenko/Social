import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import {Route, Routes} from "react-router-dom";
import News from './News/News';
import Music from './Music/Music';
import Setting from './Setting/Setting';
import Dialogs from './Dialogs/Dialogs';
import Header from "./Header/Header";
import Menu from "./Menu/Menu";


function App(props) {

  return (
   
      <div className="body">
        <Header/>
        <Menu/>
        <div className='wrapper_page'>
          <Routes>
  
            <Route path='/profile' element={<Profile 
            messageData={props.MassagePost.posts.messageData}
            addPost={props.addPost}
             />}/>;
            <Route path='/dialogs/:dialogId' element={<Dialogs 
              dialogData={props.MassagePost.myMessage.dialogData}
              massageText={props.MassagePost.myMessage.massageText}
              />
              
            }/>;
            <Route path='/news' element={<News/>}/>;
            <Route path='/music' element={<Music/>}/>;
            <Route path='/setting' element={<Setting/>}/>;
            {/* <Route path='/friends' element={<BestFriend/>}/>; */}
  
          </Routes>
        
        </div>
        
      </div>

  );
}

export default App;

