import React from "react";
import NameDialog from "./NameDialogs/NameDialog";
import Massage from "./Message/Massage";
import { addMessageActionCreater } from "../../Redux/State";
import { appDatenewMessageTextActuionCreate } from "../../Redux/State";

// import FotoUser from "./FotoUser/FotoUser";


const Dialogs = (props)=> {


 
let  dialogs = props.dialogData.map( dialog=>

    <NameDialog  name= {dialog.name} /> 
 )

 
 let  massages = props.massageText.map( message=>

    <Massage textMassage = {message.textMassage} id={message.id} />
 )

 let newMessageElement = React.createRef(newMessageElement)

 let addMessageText = ()=> {
  props.dispatch(addMessageActionCreater())
 }

let userTextMessage= ()=> {
    let newUserText=newMessageElement.current.value;
    props.dispatch(appDatenewMessageTextActuionCreate(newUserText));

}


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
                    <div className="user">
                        <textarea className="user_text" onChange={userTextMessage} ref={newMessageElement} value={props.newMessageBody}></textarea>
                        <button onClick={addMessageText} >send </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Dialogs