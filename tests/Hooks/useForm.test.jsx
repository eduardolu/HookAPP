import { renderHook, act } from '@testing-library/react'
import { useFrom } from '../../src/Hooks/useFrom';


describe('useForm', () => { 
    const iniciarform={
        name: 'eduardo',
        email:'edu@gmail.com'
    }

   test('should debe regresar valor por defecto', () => { 
    const {result} = renderHook( ()=> useFrom(iniciarform));
    expect (result.current).toEqual({
        name: iniciarform.name,
        email: iniciarform.email,
        FromState: iniciarform,
        onInputChange: expect.any(Function),
        onResertFrom: expect.any(Function)
      })
    }) 

    test('should de cambiar el nombre de formulario', () => { 
        const newValue = 'Elena'
        const {result} = renderHook( ()=> useFrom(iniciarform) );
        const {onInputChange} =result.current
        act(()=> {
            onInputChange({target: {name:'name', value: newValue}})
        })
        expect (result.current.name).toBe(newValue) 
        expect (result.current.FromState.name).toBe(newValue) 

     })

     test('should reset el formulario', () => { 
        const newValue = 'Elena'
        const {result} = renderHook( ()=> useFrom(iniciarform) );
        const {onInputChange, onResertFrom} =result.current
        act(()=> {
            onInputChange({target: {name:'name', value: newValue}})
            onResertFrom()
        })
        expect (result.current.name).toBe(iniciarform.name) 
        expect (result.current.FromState.name).toBe(iniciarform.name) 

     })
 })