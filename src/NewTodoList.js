import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import NewTodoListView from './NewTodoListView'

export default function NewTodoList() {
    const [itemList, setItemlist]=useState([])
    
    
  return (
    <div>
        <NewTodoForm setItemlist={setItemlist} addForm={true} i={{}}/>
        <NewTodoListView itemList={itemList} setItemlist={setItemlist}/>
    </div>
  )
}

