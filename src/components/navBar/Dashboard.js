import React, { useEffect, useContext, useState } from 'react';
import CreatingTasks from '../bodyComponents/CreatingTasks'
import dataContext from '../Context'
import TaskCard from '../bodyComponents/TaskCard';
import TaskCardNone from '../bodyComponents/TaskCardNone';

function Dashboard(props) {
    const datum = useContext( dataContext )
    const [projectTasks, setProjectTasks] = useState([])
    const [tasksInProgress, setTasksInProgress] = useState ([])
    const [tasksInReview, setTasksInReview] = useState([])
    const [tasksNotStarted, setTasksNotStarted] = useState([])
    
    useEffect( () => {

    if(datum.tasks.length >0){
        console.log("Current active project", datum.currentProject);
        let currentProjID = datum.currentProject._id //replace with datum.currentProject when currentProject useStateworks
        const tempArr = datum.tasks.filter(task => task.projectID === currentProjID)
        
        // console.log("tempArr", tempArr)
                
        let tempTasksNotStarted = []
        let tempTasksInReview = []
        let tempTasksInProgress = []

        tempArr.map( (task) => {
            if (task.status === "inProgress")
                tempTasksInProgress.push(task)
            else if (task.status === "inReview")
                tempTasksInReview.push(task)
            else if (task.status === "notStarted")
                tempTasksNotStarted.push(task)
        })
        
        let taskObj = {
            all: tempArr,
            tasksInProgress: tasksInProgress,
            tasksInReview: tasksInReview,
            tasksNotStarted: tasksNotStarted
        }
        
        setProjectTasks(tempArr)//setProjectTasks(taskObj)
        // console.log("task objects", taskObj)
        // console.log("projectTasks:", projectTasks)
        // projectTasks?.tasksNotStarted.map((task) => console.log("not started:", task))
        // projectTasks?.tasksInProgress.map((task) => console.log("tasksInProgress:", task))
        // projectTasks?.tasksInProgress.map((task) => console.log("tasksInProgress:", task))

        setTasksNotStarted(tempTasksNotStarted)
        setTasksInProgress(tempTasksInProgress)
        setTasksInReview(tempTasksInReview)

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
            {/* <div class="containers"> */}<div>
                <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" class="card">
                <div class="content">
                    {projectTasks.length >0 ? 
                        tasksNotStarted.map((task) => { //projectTasks.tasksNotStarted.map((task) =>
                            // console.log("notStarted send to taskcard component:", task)
                            return <TaskCard task={task} />}) 
                        : <TaskCardNone />}
                </div>
            </div>
            
            {/* In Progress */}
            {/* <div class="card"> */}<div>
            {/* <div class="content"> */}<div>
                {projectTasks.length>0 ? 
                    tasksInProgress.map((task) => {//
                        // console.log("inProgress send to taskcard component:", task)
                        return <TaskCard task={task} />}) 
                    : <TaskCardNone />}

                </div>
            </div>

        {/* In Review */}
        <div class="card">
            <div class="content">
                {projectTasks.length >0 ? 
                    tasksInReview.map((task) => {
                        // console.log("inReview send to taskcard component:", task)
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