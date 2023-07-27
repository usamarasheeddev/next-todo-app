"use client"
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './TodoProvider'


export default function InputForm() {
    const { todos, setTodos } = useContext(TodosContext)
    const [todo, setTodo] = React.useState('')




    const addTodo = () => {
        setTodos([...todos, { ...todo, id: todos.length + 1 }])
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        addTodo()
        setTodo('')
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
                <TextField value={todo.name} id="title" name='title' label="Title" onChange={onChange} variant='standard' />
                <TextField value={todo.description} id="description" name='description' onChange={onChange} label="Description" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Add todo</Button>
            </form>
        </React.Fragment>
    )
}
