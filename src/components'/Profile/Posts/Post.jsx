 import React from "react";
 import NewPost from "./NewPost";
 import { addPost } from "../../../Redux/State";
 const MyPost = (props) => {


    let posts = props.messageData.map (post=>
        <NewPost textMassage ={post.textMassage} id={post.id} like = {post.like}/>)

    let newPostElement = React.createRef(newPostElement)
    
    let addPost = ()=> {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = " "
     }

        return (
    <div className="my_post">
        <div className="ps">
           <h3>My post</h3>
       </div> 
       <div className="new">
           <textarea ref={newPostElement}></textarea>
           <button onClick={addPost} >Add Post</button>
       </div>
      {posts}
        
   </div>
        )
 }

 export default MyPost