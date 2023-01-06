
export const ItemTodo = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span 
          className= {`align-self-center ${ (todo.done) ? 'text-decoration-line-through':''}`}
          aria-label= "span"
          onClick={ () => onToggleTodo(todo.id)}
        > {todo.desc} </span>
        <button 
          className='btn btn-danger' 
          aria-label= "delet"
          onClick={()=>onDeleteTodo( todo.id )}
        >borrar</button>
    </li>
  )
}
