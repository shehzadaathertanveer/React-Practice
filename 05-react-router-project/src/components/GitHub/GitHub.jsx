import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function GitHub(){
    const data = useLoaderData()
    // const [data,Data]=useState("")
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shehzadaathertanveer')
    //     .then((data)=>data.json())
    //     .then((data)=> Data(data))
    // },[])
    return(
        <div className=" text-center p-4 text-white bg-gray-600 text-3xl">
            Github Followers: {data.followers}

            <img src={data.avatar_url}  alt="git picture" width={300} />
        </div>
    )
}
export default GitHub

export const githubLoader= async()=>{
    const response =await fetch('https://api.github.com/users/shehzadaathertanveer')
    return response.json()
}