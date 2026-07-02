import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId}= useParams()
    return(
        <div className="bg-gray-600 text-white text-3xl pp-4 text-center" >
           User:{userId}
        </div>
    )
}

export default User