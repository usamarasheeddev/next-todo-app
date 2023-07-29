"use client"

import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../../Components/Clientside/authProvider.js';
import { useRouter } from 'next/navigation';

export default function page() {
    const [creds, setsetCreds] = React.useState({ email: '', password: '' })
    const {user,setUser,setAuthenticated}= React.useContext(AuthContext)
    const router=useRouter()
    const onChange = (e) => {
        const { name, value } = e.target;
        setsetCreds((prevcreds) => ({
            ...prevcreds,
            [name]: value,
        }));
    }
    // const notify = () => toast('Here is your toast.');


    const handleOnSubmit = (e) => {
        e.preventDefault()
        loginUser()
    }

    const loginUser = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/loginUser', creds)
            toast.success('You have successfully logged in')
            setUser(response.data.user)
            setAuthenticated(true)
            router.push('/')

        } catch (error) {
            toast.error(error.response.data.message)

        }
    }
    return (
        <div>
            <Typography align='center' variant='h6' sx={{ mt: '2rem' }}>Login</Typography>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem', margin: 'auto' }}>
                <TextField value={creds.email} id="email" name='email' label="email" onChange={onChange} variant='standard' />
                <TextField value={creds.password} id="password" name='password' type='password' onChange={onChange} label="password" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Login</Button>
                <Typography align='center' variant='h6' sx={{ m: '1rem' }}>OR</Typography>
                <Link href='/auth/signup' style={{ textAlign: 'center' }}>
                    Register
                </Link>
                <Toaster />
            </form>
        </div>
    )
}
