 import React from "react";
 import NewPost from "./NewPost";
 import { addPost } from "../../../Redux/State";
 import { addPostActionCreater } from "../../../Redux/State";
 import { appDateNewPostTextActionCreater } from "../../../Redux/State";

 const MyPost = (props) => {


    let posts = props.messageData.map (post=>
        <NewPost textMassage ={post.textMassage} id={post.id} like = {post.like}/>)

    let newPostElement = React.createRef(newPostElement)
    
    let addPost = ()=> {
    
        props.dispatch(addPostActionCreater());
       
     }
 let onPostChange= ()=> {
    let text = newPostElement.current.value;
    let action =(appDateNewPostTextActionCreater (text) )
    props.dispatch (action)
 
    
 }
 
        return (
    <div className="my_post">
        <div className="ps">
           <h3>My post</h3>
       </div> 
       <div className="new">
           <textarea onChange={onPostChange}  
           ref={newPostElement} value={props.newPostText} />
           <button onClick={addPost} >Add Post</button>
       </div>
      {posts}
        
   </div>
        )
 }

 export default MyPost