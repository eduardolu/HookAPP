import { useRef } from "react"

export const FocusScreen = () => {
    const inputref = useRef();
    const onClick = ()=>{
        inputref.current.select()
    }
  return (
    <>
        <h1>FocusScreen</h1>
        <hr />
        <input 
            ref={inputref}
            type="text" 
            placeholder="Ingresa su nombre"
            className="form-control"
        />
        <button onClick={onClick} className="btn btn-primary mt-3">
            Set Focus
        </button>
    </>
  )
}
