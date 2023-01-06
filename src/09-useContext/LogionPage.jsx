
import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LogionPage = () => {

  const {user,setUser} = useContext(UserContext);
 // console.log(user);
  return (
    <>
        <h1>Logion page</h1>
        <hr />
        <pre aria-label='name'>
          {JSON.stringify(user,null,3)}
        </pre>
        
        <button 
          className='btn btn-primary'
          onClick={()=> setUser({
            id: 123,
            name: 'Eduardo',
            email:'edu@gmail.com'
          })}
        >
          añadir user
        </button>
    </>
  )
}

