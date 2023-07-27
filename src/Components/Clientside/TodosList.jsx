"use client"
import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './TodoProvider'
import { Box } from '@mui/material'

export default function TodosList({ children }) {
    const { todos, setTodos } = useContext(TodosContext)
    return (
        <ul style={{width:'20rem',margin:'auto'}}>
               {todos.map((todo) => {
                return <Box key={todo.id}>

                    <li >{todo.title}</li>
                    <p>{todo.description}</p>
                    <hr/>
                </Box>

            })}
         
        </ul>
    )
}
