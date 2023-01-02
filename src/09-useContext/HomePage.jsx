import React from 'react'
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <>
        <h1>Home page <small>{user?.name}</small></h1>
        <hr />
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
    </>
  )
}
