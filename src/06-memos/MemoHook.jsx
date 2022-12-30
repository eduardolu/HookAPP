import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../Hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('suma')
        
    }
    return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

    const {incrementar, Count} = useCounter(5000);
    const [show, setShow] = useState(false);
    const valorMemorizado = useMemo(() => heavyStuff(Count), [Count])

    return (
        <>
            <h1>countador: <small>{ Count }</small></h1>
            <hr />
            <h4>{valorMemorizado}</h4>
            <button
                className="btn btn-primary"
                onClick={()=>incrementar()}
            >
                Incrementar</button>

            <button
                className="btn btn-outline-primary"
                onClick={()=>{ setShow(!show) }}
                >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
