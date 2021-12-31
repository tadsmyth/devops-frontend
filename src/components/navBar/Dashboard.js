import React, { useEffect, useContext, useState } from 'react';
import CreatingTasks from '../bodyComponents/CreatingTasks'
import dataContext from '../Context'
import TaskCard from '../bodyComponents/TaskCard';
import TaskCardNone from '../bodyComponents/TaskCardNone';

function Dashboard(props) {
    let datum = useContext( dataContext )
    let [projectTasks, setProjectTasks] = useState([])
    
    useEffect( () => {

    if(datum.tasks.length >0){
        console.log("Current active project", datum.currentProject);
        // current project ID is a useState for the current active project - currently hard coded to first project in the array
        let currentProjID = datum.currentProject._id //replace with datum.currentProject when currentProject useStateworks
        const tempArr = datum.tasks.filter(task => task.projectID === currentProjID)
        console.log("currentProjID:", currentProjID, datum.currentProject._id)
        console.log("tempArr", tempArr)
        // setProjectTasks([datum.projects[0]]) //replace with tempARR when currentProject useStateworks
        
        let tasksNotStarted = []
        let tasksInReview = []
        let tasksInProgress = []

        tempArr.map( (task) => {
            if (task.status === "inProgress")
                tasksInProgress.push(task)
            else if (task.status === "inReview")
                tasksInReview.push(task)
            else if (task.status === "notStarted")
                tasksNotStarted.push(task)
        })
        
        let obj = {
            all: tempArr,
            tasksInProgress: tasksInProgress,
            tasksInReview: tasksInReview,
            tasksNotStarted: tasksNotStarted
        }
        
        setProjectTasks(tempArr)

        }
    }, [datum])
    
    return (
        <>
        <div className="">
            {/* <CurrentProject /> */}
            {/* div for the buttons bar at the top */}
            <div className='d-flex flex-row-reverse mt-5 pt-3 px-2'>
                <CreatingTasks />
            </div>
        <div className="taskCards">
            
                {/* Not Started */}
            <div class="containers">
                <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" class="card">
                <div class="content">
                    {projectTasks.length >0 ? 
                        projectTasks.map((task) => {
                        return <TaskCard task={task} />}) 
                        : <TaskCardNone />}
                </div>
            </div>
            
            {/* In Progress */}
            <div class="card">
            <div class="content">
                {projectTasks.length >0 ? 
                    projectTasks.map((task) => {
                    return <TaskCard task={task} />}) 
                    : <TaskCardNone />}

            </div>
            </div>
{/* In Review */}
<div class="card">
<div class="content">
                {projectTasks.length >0 ? 
                    projectTasks.map((task) => {
                    return <TaskCard task={task} />}) 
                    : <TaskCardNone />}
            </div>
            </div>
                </div>
                </div>
                </div>
                </>
                );
            }
export default Dashboard;