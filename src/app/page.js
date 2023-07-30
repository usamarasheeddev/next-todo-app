import Link from 'next/link'
import React from 'react'
import Navbar from '../Components/Clientside/Navbar'
import InputForm from '../Components/Clientside/inputForm'
import { Typography, Box } from '@mui/material'
import TodosList from '@/Components/Clientside/TodosList'
import { connectDb } from '@/utils/connectDb'
import TodosServer from '@/Components/ServerSide/TodosServer'

export default function page() {


  return (
    <div style={{ width: '100%' }}>


      <InputForm />


      <Box sx={{ margin: 'auto', display: 'felx', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <Typography align='center' variant='h5'>
          Todos List
        </Typography>


        <TodosList >
          <TodosServer />
        </TodosList>

      </Box>
    </div>
  )
}
