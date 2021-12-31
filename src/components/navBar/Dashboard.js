import React, { useEffect, useContext, useState } from "react";
import CreatingTasks from "../bodyComponents/CreatingTasks";
import dataContext from "../Context";
import TaskCard from "../bodyComponents/TaskCard";
import CurrentProject from "../CurrentProject";
import TaskCardNone from "../bodyComponents/TaskCardNone";
import VanillaTilt from 'vanilla-tilt'

function Dashboard(props) {
  let datum = useContext(dataContext);
  let [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    if (datum.projects.length) {
      console.log("Datum projects0", datum.projects[0]);
      // current project ID is a useState for the current active project - currently hard coded to first project in the array
      let currentProjID = datum.projects[0]._id; //replace with datum.currentProject when currentProject useStateworks
      const tempArr = datum.tasks.filter(
        (task) => task.projectID === currentProjID
      );
      // setProjectTasks(tempArr)
      setProjectTasks([datum.projects[0]]); //replace with tempARR when currentProject useStateworks
    }
  }, [datum]);

  console.log(projectTasks[0]?.name);

  return (
    <>
      <div className="">
          {/* <CurrentProject /> */}
          {/* div for the buttons bar at the top */}
          {/* dont forget to uncomment */}
          <div className='d-flex flex-row-reverse mt-5 pt-3 px-2'>
                <CreatingTasks />
            </div>
        <div className="taskCards">

          {/* Not Started */}
          <div class="containers">
          <div data-tilt data-tilt-glare data-tilt-max-glare="0.8" class="card">
          <div class="content">
              {projectTasks.length > 0 ? (
                projectTasks.map((task) => {
                  console.log("taskoutside:", task);
                  return <TaskCard task={task} />;
                })
              ) : (
                <TaskCardNone />
              )}
          </div>
          </div>

          {/* In Progress */}
          <div class="card">
          <div class="content">
            {projectTasks.length > 0 ? (
              projectTasks.map((task) => {
                console.log("taskoutside:", task);
                return <TaskCard task={task} />;
              })
              ) : (
                <TaskCardNone />
                )}
          </div>
          </div>

          {/* In Review */}
          <div class="card">
          <div class="content">
            {projectTasks.length > 0 ? (
              projectTasks.map((task) => {
                console.log("taskoutside:", task);
                return <TaskCard task={task} />;
              })
              ) : (
                <TaskCardNone />
                )}
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
