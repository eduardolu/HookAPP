import { useState } from "react";
import { useCounter } from "../Hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const {incrementar, Count} = useCounter();
    const [show, setShow] = useState(false)

    return (
        <>
            <h1>countador: <Small Count={Count}/></h1>
            <hr />
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
