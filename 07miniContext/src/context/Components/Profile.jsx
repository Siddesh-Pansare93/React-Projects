import React, { useContext } from 'react'
import UserContext from '../userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <h2>Please login</h2>
  
    else return (
        <h2>Welcome { user.username } </h2>
  )
}

export default Profile