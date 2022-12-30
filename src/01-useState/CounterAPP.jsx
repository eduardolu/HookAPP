import { useState } from "react"


export const CounterAPP = () => {
    const [state, setCount] = useState({
        contador1:10,
        contador2:20,
        contador3:30,
    })
    const {contador1,contador2,contador3}=state
    const incrementar= ()=>{
        setCount({
            ...state,
            contador1: contador1+1,
        })

    }
  return (
    <>
        <h1>Contador</h1>
        <h2> { contador1 }</h2>
        <h2> { contador2 }</h2>
        <h2> { contador3 }</h2>
        <hr /> 
        <button onClick={incrementar}>+1</button>
    </>
  )
}
