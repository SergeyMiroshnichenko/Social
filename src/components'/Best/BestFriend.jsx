import Friendly from "./Friendly/Friendly"
import React from "react"

const BestFriend = () => {
    return (
        <div className="wrapper_friend">
            <div className="container">
                <div className="title">
                    Best Friend
                </div>
                <div className="my_best_friend">
                    <Friendly/>
                    <Friendly/>
                    <Friendly/>
                </div>
            </div>
        </div>
    )
}

export default BestFriend