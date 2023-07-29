"use client"

import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
export default function page() {
    const [creds, setsetCreds] = React.useState({ email: '', password: '',userName: '' });
    const onChange = (e) => {
        const { name, value } = e.target;
        setsetCreds((prevcreds) => ({
            ...prevcreds,
            [name]: value,
        }));
    }
    const registerUser = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/registerUser', creds)
            toast.success(response.data.message)
            setUser(response.data.user)
            console.log(response)
            // setAuthenticated(true)
            // router.push('/')

        } catch (error) {
            toast.error(error.response.data.message)

        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        registerUser()
    }
    return (
        <div >
            <Typography align='center' variant='h6' sx={{ mt: '2rem' }}>Register</Typography>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', width: '20rem', margin: 'auto' }}>
                <TextField value={creds.userName} id="userName" name='userName' label="UserName" onChange={onChange} variant='standard' />
                <TextField value={creds.email} id="email" name='email' label="Email" onChange={onChange} variant='standard' />
                <TextField value={creds.password} id="password" name='password' type='password' onChange={onChange} label="Password" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Register</Button>
                <Typography align='center' variant='h6' sx={{ m: '1rem' }}>OR</Typography>
                <Link href='/auth/login' style={{ textAlign: 'center' }}>
                    Login
                </Link>
            </form>
            <Toaster />
        </div>
    )
}
