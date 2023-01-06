import { render, fireEvent, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LogionPage } from '../../src/09-useContext/LogionPage'

// jest.mock('../../src/09-useContext/context/UserContext')

describe('LogionPage', () => { 


    test('should no aparece el usurario', () => { 
        render( 
            <UserContext.Provider value={{user:null}}>
                <LogionPage />
            </UserContext.Provider>
            )
            const usuario = screen.getByLabelText('name')
            expect (usuario.innerHTML).toBe('null')
        }) 
   test('should boton', () => { 
    const setUserMock = jest.fn();
    render( 
        <UserContext.Provider value={{user:null, setUser: setUserMock}}>
            <LogionPage />
        </UserContext.Provider>
        )
        const boton = screen.getByRole('button')
        fireEvent.click(boton)
        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith({"email": "edu@gmail.com", "id": 123, "name": "Eduardo"})
    }) 
 })