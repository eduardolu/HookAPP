const initialState= [{
    id: 1,
    todo: 'encontrar lo que busca',
    done: false,  
}]

const todoReducer = (state=initialState, action={}) => {
    if (action.type === '[todo] add todo') {
        return [...initialState, action.payload];
    }
    return state;
}

let todos = todoReducer()
const newTodo={
    id: 2,
    todo: 'llevar a casa',
    done: false,  
}
const addTodoAction = {
    type:'[todo] add todo',
    payload: newTodo,
}

todos = todoReducer(initialState,addTodoAction)


console.log(todos);