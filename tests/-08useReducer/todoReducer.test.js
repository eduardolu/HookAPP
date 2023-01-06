import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('todoReducer', () => { 
    const iniciaState = [{
        id:1,
        desc:'demo todo',
        done: false,
    }]
    test('should regresa estado iniciar', () => {

        const newState = todoReducer(iniciaState,[])
        expect (newState).toBe(iniciaState)
        
     })

     test('should agregar un todo', () => { 
        const act = {
            type:'[TODO] add Todo',
            payload: {
                id:2,
                desc:'todo añadido',
                done: false,
            }
        }
        const newState = todoReducer( iniciaState, act )
        expect (newState.length).toBe(2);
        expect (newState).toContain(act.payload);
      })
      
    test('should eliminar un todo', () => { 
        const act = {
            type:'[TODO] delete item',
            payload: 1
        }
        const newState = todoReducer( iniciaState, act )
        expect (newState.length).toBe(0);
        expect (newState).not.toContain(act.payload);
    })
    
    test('should todo hecho', () => { 
        const act = {
            type:'[TODO] toggle todo',
            payload: 1
        }
        const newState = todoReducer( iniciaState, act )
        expect (newState[0].done).toBe(true);
    })
 })