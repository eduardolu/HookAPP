import { render, screen, fireEvent} from '@testing-library/react'
import { ItemTodo } from '../../../src/08-useReducer/component/ItemTodo'

describe('ItemTodo', () => { 
    const toDo = {
        id:1,
        desc:'hacer el test',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks())

    test('should ItemTodo', () => { 
        render(
            <ItemTodo 
                todo ={toDo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )
        const liElement = screen.getByRole('listitem')
        expect (liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement = screen.getByLabelText('span')
        expect (spanElement.className).toBe('align-self-center ')
    }) 

    test('should hecho ItemTodo', () => { 
        toDo.done = true;
        render(
            <ItemTodo 
                todo ={toDo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )
        const spanElement = screen.getByLabelText('span')
        expect (spanElement.className).toContain('text-decoration-line-through')
    }) 
    
    test('should se llame delete toggle', () => { 
        // toDo.done = false
        render(
            <ItemTodo 
                todo ={toDo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect (onToggleTodoMock).toHaveBeenCalledWith(toDo.id)
    }) 

    test('should se llame delete toDo', () => { 
        // toDo.done = false
        render(
            <ItemTodo 
                todo ={toDo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />
        )
        const spanElement = screen.getByLabelText('delet')
        fireEvent.click(spanElement)
        expect (onDeleteTodoMock).toHaveBeenCalledWith(toDo.id)
    }) 
 })