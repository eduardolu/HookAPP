import React from 'react'
import { useState } from 'react'
import { useFrom } from '../../Hooks'

export const FormTodo = ({onNewTodo}) => {
    const {onInputChange,onResertFrom, desc,setFromState}= useFrom({
      desc:''
    })
    const onFromSubmit =( event )=>{
      event.preventDefault();
      if (desc.length < 1) return;
      const newTodo={
        id: new Date().getTime(),
        desc:desc,
        done:false,
      }
      onNewTodo(newTodo);
      onResertFrom()
    }
    

  return (
    <form onSubmit={onFromSubmit}>
        <input 
            type="text" 
            placeholder='añadir tareas nuevas'
            className='form-control' 
            name="desc"
            value={ desc }
            onChange={onInputChange}   
        />
        <button 
            type='submit'
            className='btn btn-primary mt-2'
        > Agregar </button>
    </form>
  )
}
