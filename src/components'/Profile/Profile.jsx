import React from "react"
import MyPost from "./Posts/Post"
import Information from "./Information/Information"



const Profile = (props) => {
    return (
        <div className="profile">
            <div className="container">
                <Information/>
                <MyPost messageData={props.messageData}
                 addPost={props.addPost}/> 
            </div>
        </div>
    )
}



export default Profile