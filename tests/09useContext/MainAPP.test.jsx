import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainAPP } from '../../src/09-useContext/mainAPP'

describe('MainAPP', () => { 
    test('should mostrar homePage', () => { 
        render( 
            <MemoryRouter>
                <MainAPP />
            </MemoryRouter>
        )
        // screen.debug()
        expect ( screen.getByText('Home page')).toBeTruthy()
     })  

     test('should mostrar LoginPage', () => { 
        render( 
            <MemoryRouter initialEntries={['/login ']}>
                <MainAPP />
            </MemoryRouter>
        )
        expect ( screen.getByText('Logion page')).toBeTruthy()
     })  
 })