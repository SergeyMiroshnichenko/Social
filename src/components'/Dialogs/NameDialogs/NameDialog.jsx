 import React from "react"
 import { NavLink } from "react-router-dom"

const NameDialog = (props) => {

    let path = "/dialogs/"+ props.id
    return (
        <div className="name_dialog">  
         <div className="foto_user">
           <NavLink  to={path}>{props.userfoto}</NavLink>          
        </div>
        <div className="name user">
            <NavLink  to={path}>{props.name}</NavLink> 
        </div>
        
       </div>
    )

}



export default NameDialog;


