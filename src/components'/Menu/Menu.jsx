import React from "react"
import { NavLink } from "react-router-dom"
import BestFriend from "../Best/BestFriend"

const Menu = ()=> {
    return (
        <div className="menu">
            <div className="container">
                <nav>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/dialogs/:dialogId">Dailogs</NavLink>
                    <NavLink to="/news" >News</NavLink>
                    <NavLink to="/music">Music</NavLink>
                    <NavLink to="/setting">Setting</NavLink>
                   
                </nav>
                {/* <BestFriend/> */}
                
            </div>
        </div>
    )
}

export default Menu