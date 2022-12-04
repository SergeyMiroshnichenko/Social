import React from "react"
import MyPost from "./Posts/Post"
import Information from "./Information/Information"



const Profile = (props) => {
    return (
        <div className="profile">
            <div className="container">
                <Information/>
                <MyPost messageData={props.messageData}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
       
                 /> 
                 
            </div>
        </div>
    )
}



export default Profile