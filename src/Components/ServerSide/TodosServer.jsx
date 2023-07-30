import React from 'react'
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'


export default async function TodosServer() {
const token=cookies().get('token')?.value
if(!token) return redirect('/auth/login')
// console.log(token.value)
    const fetchData = async () => {
        try {


            const response = await fetch('http://localhost:3000/api/fetchTodos', {
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'cookie':`token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzRjMzk1ZjZjMzBmZjRiNTllYjIyZCIsImlhdCI6MTY5MDc0MDQwNH0.ImWcoxck9o9mUh436SNmMloW2sPVCeXG5SILeHeyYQM; Max-Age=1690765604043; Path=/; HttpOnly`
                },
            });
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            return [];
        }
    }

    let todos = await fetchData();

    return (
        <div>
            {todos.map((todo) => {
                return <div key={todo.id}>

                    <li >{todo.title}</li>
                    <p>{todo.description}</p>
                    <hr/>
                </div>

            })}
        </div>
    )
}
