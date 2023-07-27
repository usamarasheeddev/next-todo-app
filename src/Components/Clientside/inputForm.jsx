"use client"
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function InputForm() {
const [todo, setTodo] = React.useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    }
    return (
        <React.Fragment>
            <Typography align='center' variant='h6' sx={{ mt: '2rem' }}>Todo</Typography>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem', margin: 'auto' }}>
                <TextField id="title" name='title' label="Title" onChange={onChange} variant='standard' />
                <TextField id="description" name='description' onChange={onChange} label="Description" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Add todo</Button>
            </form>
        </React.Fragment>
    )
}
