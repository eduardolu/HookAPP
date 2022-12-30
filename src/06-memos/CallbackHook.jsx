import { useCallback } from 'react';
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [count, setCount] = useState(10);
    const incrementFather = useCallback(
      (suma) => {
        setCount((value)=>value + suma)
      },
      [],
    )
  return (
    <>
        <h1>contador : {count}</h1>
        <hr />
        <ShowIncrement  incrementa={incrementFather}/>
    </>
  )
}
