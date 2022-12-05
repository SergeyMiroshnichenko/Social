import React from "react";

const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST";
const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY"
const ADD_MESSAGE_USER="ADD-MESSAGE-USER"
 let store = {

  
    _state: {

        myMessage :{

            dialogData:[    
                {id:1, name:"Milena",fotouser:"dfdsf"},
                {id:2, name:"Mira",fotouser:"dfdsf"},
                {id:3, name:"Sasha",fotouser:"dfdsf"},
                {id:4, name:"Vanya"},
                {id:4, name:"Koliya"},
                {id:5, name:"Sergey"},
                {id:6, name:"Valentin"},
                {id:4, name:"Vita"},
            ],
        
            massageText:[   
                {id:1, textMassage:"Hello World"},
                {id:2, textMassage : "Hello World"},
                {id:3, textMassage: "My Love"},
        
            ],  

            newMessageBody:"hello my dear wife"
        },
      
        
         posts:{
                messageData:[
                    {id:1, textMassage:"Hello my dear wife", like:25},
                    {id:2, textMassage: "My doter",like:35},
                    {id:3, textMassage: " You my Love",like:45},
                    {id:4, textMassage:"I am the best",like:55},
                    {id:5, textMassage:"Hello my dear wife",like:25},
                    {id:6, textMassage: "My doter",like:45},
                    {id:7, textMassage: " You my Love",like:85},
                    {id:8, textMassage:"I am the best",like:95},
                ],
        
                 newPostText :"Hello yo"
    
            }
    },



    subscribe (observer) {
        this._callSubscriber=observer;
    },
    getMassagePost (){
        return this._state
    },
   

   
    dispatch (action) {
        if (action.type===ADD_POST) {
            let newPost={
                id:5,
                textMassage:this._state.posts.newPostText,
                like:"0"  
            }
        
            this._state.posts.messageData.push(newPost);
            this._state.posts.newPostText=""
            this._callSubscriber (this._state)
        }
         else if (action.type === UPDATE_NEW_POST_TEXT) {
            store._state.posts.newPostText = action.newText;
            this._callSubscriber()
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            store._state.myMessage.newMessageBody= action.newMessagetext;
            this._callSubscriber()
        }
        else if (action.type = ADD_MESSAGE_USER) {
            let newMessageUser = {
                id:9,
                textMassage : this._state.myMessage.newMessageBody,
            }
            this._state.myMessage.newMessageBody=""
            this._state.myMessage.massageText.push(newMessageUser)
            this._callSubscriber (this._state)
          
        }

    }
   
}

export let addPostActionCreater = () => ({type : "ADD-POST"})
export let addMessageActionCreater= ()=>({type:"ADD-MESSAGE-USER"})
   
export let appDateNewPostTextActionCreater = (text) => ({type:"UPDATE-NEW-POST", newText: text})
export let appDatenewMessageTextActuionCreate=(newUserText)=>({type:"UPDATE-NEW-MESSAGE-BODY", newMessagetext:newUserText})
      
export default store

 
    





