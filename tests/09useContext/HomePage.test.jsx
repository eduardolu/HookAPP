import {render, screen} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

describe('HomePage', () => { 
    const user={
        id:1,
        name:'eduardo'
    }
   test('should HomePage', () => { 
        render( 
        <UserContext.Provider value={{user:null}}>
            <HomePage />
        </UserContext.Provider>
        )
        const usuario = screen.getByLabelText('pre')
        expect (usuario.innerHTML).toBe('null')
    }) 
    test('should con usurario', () => { 
        render( 
        <UserContext.Provider value={{user:user}}>
            <HomePage />
        </UserContext.Provider>
        )
        // screen.debug()
        const usuario = screen.getByLabelText('pre')
        expect (usuario.innerHTML).toContain('eduardo')
    }) 
 })