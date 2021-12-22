import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm'
import dataContext from '../Context';
// const url = "http://localhost:4000/devops/"

function AddingTodo({todos, completeTodo}) {
    const [edit, setEdit] = useState({
        value: ''
    })
    // const [dev, setDev] = useState([])

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((res) => {setDev(res)
    //         console.log("Dev Data:", dev);
    //         })
    //         .catch(console.err);
    //     }, [])

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