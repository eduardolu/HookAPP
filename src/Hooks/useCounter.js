import { useState } from "react"

export const useCounter = (iniciar=10) =>{
    const [Count, setCount] = useState(iniciar)
    const incrementar = () =>{
        setCount(Count+1);
    }
    const decrementar = () =>{
        setCount(Count-1);
    }
    const reniciar = () =>{
        setCount(0);
    }
    return{
        Count,
        incrementar,
        decrementar,
        reniciar
    }
}