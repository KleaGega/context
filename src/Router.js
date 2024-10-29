import { Routes,BrowserRouter,Route } from 'react-router-dom'
import React from 'react'
import Homepage from './component/Homepage'
import Task from './component/Task'
import ToDoList from './component/ToDoList'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Homepage/>}></Route>
        <Route path='/task' element = {<Task/>}></Route>
        <Route path='/todo' element = {<ToDoList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
