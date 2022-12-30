
import { useState, useEffect } from "react"
import {Message} from './Message'

export const SimpleForm = () => {
    const [FromState, setFromState] = useState({
        username: 'Eduardo',
        email: 'eduardo@gmail.com',
    })
    const { username,email } = FromState
    const onInputChange =({target})=>{
        const {name,value}= target
        setFromState({
            ...FromState,
            [name]:value
        })
    }

    useEffect(()=>{
        // console.log('llamado primera vez')
    },[])
    useEffect(()=>{
        // console.log('llamado para email')
    },[email])
    useEffect(()=>{
        // console.log('llamado para nombre')
    },[username])

    return (
        <>
            <h1>Fromulario simple</h1>
            <hr />
            <input
                type='test'
                className="form-control"
                placeholder="UserName"
                name="username"
                onChange={onInputChange}
            />
            <input
                type='email'
                className="form-control mt-3"
                placeholder="ejemplo@google.com"
                name="email"
                onChange={onInputChange}
            />
            {
                username==='Edu' && <Message />
            }
        </>
    )
}
