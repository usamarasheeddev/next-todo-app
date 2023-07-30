"use client"
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './TodoProvider'
import AddTodo from '@/pages/api/addTodo'
import { connectDb } from '../../utils/connectDb'
import { AuthContext } from './authProvider'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
export default function InputForm() {
    const { todos, setTodos } = useContext(TodosContext)
    const { user, authenticated, setUser, setAuthenticated } = useContext(AuthContext)
    const router = useRouter()
    const [todo, setTodo] = React.useState({ title: '', description: '' })


    React.useEffect(() => {
        // Define an inner async function
        const fetchData = async () => {
            try {
                const response = await axios.post(`http://localhost:3000/api/verifyUser`);
                console.log(response.data);
                setUser(response.data.user);
                router.push('/');
                setAuthenticated(true);
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
                if (!authenticated) {
                    router.push('/auth/login');
                }
            }
        };

        // Call the inner async function immediately
        fetchData();
    }, []);

    React.useEffect(() => {
        if (!authenticated) {
            router.push('/auth/login');
        }
    }, [authenticated, router]);
    //HANDLE LOGOUT
    const handleLogout = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/logout`);
            setAuthenticated(false)
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }

    }

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
            <Button color='error' onClick={() => handleLogout()} >Logout</Button>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem', margin: 'auto' }}>
                <TextField value={todo.title} id="title" name='title' label="Title" onChange={onChange} variant='standard' />
                <TextField value={todo.description} id="description" name='description' onChange={onChange} label="Description" variant='standard' style={{ mt: '3rem' }} />

                <Button type='submit' sx={{ mt: 5 }}>Add todo</Button>
            </form>
            <Toaster />
        </React.Fragment>
    )
}
