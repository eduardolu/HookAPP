
import {  useEffect } from "react"
import { useFrom } from "../Hooks/useFrom"

export const FormWithCustomHook = () => {
    
    const {FromState,onInputChange,username,email,password,onResertFrom} = useFrom ({
        username: '',
        email: '',
        password:'',
    })

    // const {username,email,password} =FromState
    return (
        <>
            <h1>Fromulario con Hooks</h1>
            <hr />
            <input
                type='test'
                className="form-control"
                placeholder="UserName"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type='email'
                className="form-control mt-3"
                placeholder="ejemplo@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input
                type='password'
                className="form-control mt-3"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button onClick={onResertFrom} className="btn btn-primary mt-3">barrar</button>
        </>
    )
}
