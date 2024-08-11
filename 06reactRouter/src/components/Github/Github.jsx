import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)



    return (
        <div className='text-center bg-gray-600 text-white text-3xl p-4 m-5' >Github Repos :{data.public_repos}  </div>
    )
}

export default Github

export const githubDataLoader = async () => {
    const response = await fetch("https://api.github.com/users/siddesh-pansare93")
    return response.json()
}