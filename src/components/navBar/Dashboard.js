import React, { useEffect, useContext } from 'react';
import AddingTodo from '../bodyComponents/AddingTodo'
import CreatingTasks from '../bodyComponents/CreatingTasks'
import TodoForm from '../bodyComponents/TodoForm'
import dataContext from '../Context'
import TaskCard from '../bodyComponents/TaskCard';
import CurrentProject from '../CurrentProject';
function Dashboard(props) {
    let datum = useContext( dataContext )
    let projectTasks = []
  
    useEffect( () => {
       if(datum.projects.length){
            let currentProjID = datum.projects[0]._id
            console.log("Datum:", datum)
            console.log("Projs:", datum.projects, " || Current:", currentProjID)
            console.log("Devs:", datum.devs)
            console.log("tasks:", datum.tasks)
            //finds current project location
            for(let i = 0; i<datum.tasks.length; i++){
                if(currentProjID==datum.tasks[i].projectID)
                    projectTasks.push(datum.tasks[i])
            }
        
            console.log(projectTasks)
        }
    }, [datum])
   
    
    return (
        <div className='bg-secondary'>
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse p-4'>
                <CreatingTasks />
            </div>
            
                {/* Not Started */}
                <div class="container fluid p-5 mt-5 bg-danger w-25 mw-75">
                 <div class="card-columns">
                    <TaskCard />
                   
                    </div>
                </div>
                {/* In Progress */}
            <div class="container p-5 mt-5 bg-warning w-25 mw-50">
            <div class="card-columns">

            <TaskCard />
                
                    </div>
                </div>
                {/* In Review */}
                <div class="container p-5 mt-5 bg-success w-25 mw-50">
                <div class="card-columns">
                    <TaskCard />
                 </div>
                </div>
                
        </div>
    );
}
export default Dashboard;