"use client"
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './TodoProvider'
import AddTodo from '@/pages/api/addTodo'
import {connectDb} from '../../utils/connectDb'
import { AuthContext } from './authProvider'
import { useRouter } from 'next/navigation'
export default function InputForm() {
    const { todos, setTodos } = useContext(TodosContext)
    const{ user,authenticated } = useContext(AuthContext)
    const router = useRouter()
    const [todo, setTodo] = React.useState({ title: '', description: '' })


React.useEffect(() => {
!authenticated&&router.push('/auth/login')
},[authenticated])

 

    const handleOnSubmit = async (e) => {
        e.preventDefault();
         
        if (todo.title && todo.description != '') {

            addTodo()
            setTodo({ title: '', description: '' })

        }
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
                <TextField value={todo.title} id="title" name='title' label="Title" onChange={onChange} variant='standard' />
                <TextField value={todo.description} id="description" name='description' onChange={onChange} label="Description" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Add todo</Button>
            </form>
        </React.Fragment>
    )
}
