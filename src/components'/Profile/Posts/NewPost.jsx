
import React from "react";

const NewPost = (props) => {

    return (

        <div className="wrapper_post">
            <div className="user_foto">
                <img src="https://i.yapx.ru/Ra8I0.jpg" alt="" />
            </div>
            {props.textMassage}
            <div className="like">
            {props.like }
            </div>
        </div> 
    )
      
    
}

export default NewPost