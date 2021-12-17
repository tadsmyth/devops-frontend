import React, {useState} from 'react';
import TodoForm from './TodoForm'

function AddingTodo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        value: ''
    })

    return todos.map((todo, index) => (
        <>
            <div className={todo.isComplete ? 'todoComplete' : 'addingTodo'} key={index}>
            
            <div key={todo.name} onclick={() => completeTodo(todo.text)}>
            {todo.text}
            </div>

            </div>
        </>
    ));
}

export default AddingTodo;