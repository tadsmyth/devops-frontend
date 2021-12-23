import React, { useEffect, useContext, useState } from 'react';
import AddingTodo from '../bodyComponents/AddingTodo'
import CreatingTasks from '../bodyComponents/CreatingTasks'
import TodoForm from '../bodyComponents/TodoForm'
import dataContext from '../Context'
import TaskCard from '../bodyComponents/TaskCard';
import CurrentProject from '../CurrentProject';
import TaskCardNone from '../bodyComponents/TaskCardNone';

function Dashboard(props) {
    let datum = useContext( dataContext )
    let [projectTasks, setProjectTasks] = useState([])
     
  
    useEffect( () => {

    if(datum.projects.length){
        let currentProjID = datum.projects[0]._id
        const tempArr = datum.tasks.filter(task => task.projectID === currentProjID)
        setProjectTasks(tempArr)        
        }
    }, [datum])
   
    console.log(projectTasks[0]?.projectID)
    
    return (
        <div className='bg-secondary'>
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse p-4'>
                <CreatingTasks />
            </div>
            
                {/* Not Started */}
            <div class="container fluid p-5 mt-5 bg-danger w-25 mw-75">
                <div class="card-columns">
                {projectTasks.length >0 ? 
                projectTasks.map((task) => {console.log("taskoutside:", task)
                    return <TaskCard task={task} / >}) 
                : <TaskCardNone />}
                </div>
            </div>

                {/* In Progress */}
            <div class="container p-5 mt-5 bg-warning w-25 mw-50">
                {projectTasks.length >0 ? 
                projectTasks.map((task) => {console.log("taskoutside:", task)
                    return <TaskCard task={task} / >}) 
                : <TaskCardNone />}
            </div>

                {/* In Review */}
            <div class="container p-5 mt-5 bg-success w-25 mw-50">
                {projectTasks.length >0 ? 
                projectTasks.map((task) => {console.log("taskoutside:", task)
                    return <TaskCard task={task} / >}) 
                : <TaskCardNone />}
            </div>
                
        </div>
    );
}
export default Dashboard;