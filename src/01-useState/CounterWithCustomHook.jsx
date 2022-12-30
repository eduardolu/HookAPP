import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {Count,incrementar,decrementar,reniciar}= useCounter();

    return (
        <>
            <h1>Contador: {Count}</h1>
            <hr /> 
            <button className="btn btn-primary" onClick={incrementar}>+1</button>
            <button className="btn btn-primary" onClick={reniciar}>Reset</button>
            <button className="btn btn-primary" onClick={decrementar}>-1</button>
        </>
    )
}
