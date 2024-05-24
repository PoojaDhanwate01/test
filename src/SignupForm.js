
import ValueContext from './ValueContext'
import React, { useState, useContext } from 'react'
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material'


export default function SignupForm() {
    const {userlist, setUserlist} = useContext(ValueContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <form>
                <Typography variant="h4" gutterBottom>
                    SignupForm
                </Typography>
                <TextField label="Outlined" variant="outlined" value={userlist} onChange={(e) => setUserlist(e.target.value)} />
                <h1>{userlist}</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <h1>{email}</h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <h1>{password}</h1>
                
                <Button variant='outlined' onClick={
                    (e) => {
                        e.preventDefault()
                        setUserlist((prevValues) => [...prevValues, { title: userlist }])
                        setUserlist("")
                    }
                }>Submit</Button>
                {userlist}
                {email}
                {password}
            </form>
        </div >
    )
}