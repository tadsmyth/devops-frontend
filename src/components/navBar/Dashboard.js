import React from 'react';
import AddingTodo from '../bodyComponents/AddingTodo'
import CreatingTasks from '../bodyComponents/CreatingTasks'
import TodoForm from '../bodyComponents/TodoForm'

//isnt working not sure why
function Dashboard(props) {
    return (
        <div className='d-flex justify-content-end bg-danger container-fluid'>
            <h1>Dashboard</h1>
            <CreatingTasks />
        </div>
    );
}

export default Dashboard;