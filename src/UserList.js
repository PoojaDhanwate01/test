import React, { useState } from 'react'
import SignupForm from './SignupForm'
import ValueContext from './ValueContext'

export default function UserList() {
    const[userList, setUserlist]=useState([])
  return (
    <div>
    <ValueContext.Provider value={userList}>
        </ValueContext.Provider>

    </div>
  )
}
