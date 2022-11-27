import React from "react";
import NameDialog from "./NameDialogs/NameDialog";
import Massage from "./Message/Massage";
// import FotoUser from "./FotoUser/FotoUser";


const Dialogs = (props)=> {


 
let  dialogs = props.dialogData.map( dialog=>

    <NameDialog  name= {dialog.name} /> 
 )

 

 
 let  massages = props.massageText.map( message=>

    <Massage textMassage = {message.textMassage} id={message.id} />
 )

 
   

    return (
        <div className="wrapper_dialogs">
            <div className="container">
                <div className="user_dialog">
                    {dialogs}       
                </div>
                <div className="my_dialogs">
                    <div className="wrapper_my_dialog">
                   {massages}
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs