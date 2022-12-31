import React from 'react'
import { useTodo } from '../Hooks/useTodo'
import { GroupItemTodo, FormTodo } from './component'



export const TodoAPP = () => {

    const {todos,handleDeleteTodo,handleToggleTodo,handleNewTodo} =useTodo();
    
    return (
    <>
        <h1>TODO APP : 5, <small>pendientes : 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <GroupItemTodo todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo= {handleToggleTodo}/>
            </div>
            <div className="col-5">
                <h4>Agregar tareas</h4>
                <hr />
                <FormTodo onNewTodo={ handleNewTodo }/>
            </div>
        </div>



        
    </>
  )
}
