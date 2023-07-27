import React from 'react'

export default function TodosServer(props) {
    const { todos } = props
    return (
        <div>
            {todos.map((todo) => {
                return <Box key={todo.id}>

                    <li >{todo.title}</li>
                    <p>{todo.description}</p>
                </Box>

            })}
        </div>
    )
}
