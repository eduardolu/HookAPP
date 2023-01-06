import { TodoAPP } from "../../src/08-useReducer/TodoAPP"
import {render, screen, } from '@testing-library/react'
import { useTodo } from "../../src/Hooks/useTodo"

jest.mock('../../src/Hooks/useTodo')

describe('TodoAPP', () => { 
    useTodo.mockReturnValue({
        todos:[
            {
                id:1,
                desc:'pruebar el test',
                done: false
            },
            {
                id:2,
                desc:'hacer el test',
                done: true
            }
        ],
        todosLength:2,
        pendienteLength:1,
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        handleNewTodo:jest.fn()
    })
   test('should mostrar el componente', () => { 
        render(<TodoAPP />)
        expect (screen.getByText('pruebar el test')).toBeTruthy();
        expect (screen.getByText('hacer el test')).toBeTruthy();
    }) 
 })