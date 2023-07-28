"use client"

import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
export default function page() {
    const [todo, setsetCreds] = React.useState({ email: '', password: '' })
    const onChange = (e) => {
        const { name, value } = e.target;
        setsetCreds((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    }


    const handleOnSubmit = () => {

    }
    return (
        <div >
            <Typography align='center' variant='h6' sx={{ mt: '2rem' }}>Register</Typography>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column',  width: '20rem', margin: 'auto' }}>
                <TextField value={todo.email} id="name" name='name' label="Name" onChange={onChange} variant='standard' />
                <TextField value={todo.email} id="email" name='email' label="Email" onChange={onChange} variant='standard' />
                <TextField value={todo.password} id="password" name='password' type='password' onChange={onChange} label="password" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Register</Button>
                <Typography align='center' variant='h6' sx={{ m: '1rem' }}>OR</Typography>
                <Link href='/auth/login' style={{textAlign:'center'}}>
                    Login
                </Link>
            </form>
        </div>
    )
}
