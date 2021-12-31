import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import dataContext from './components/Context';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import {useState, useEffect, useContext} from 'react'
import Dashboard from './components/navBar/Dashboard'
import Today from './components/navBar/Today'
import Upcoming from './components/navBar/Upcoming'
import Completed from './components/navBar/Completed'
import Settings from './components/navBar/Settings'
import Connection from './Connection'
import axios from 'axios';

function App() {

const [devs, setDevs] = useState([])
const [projects, setProjects] = useState([])
const [tasks, setTasks] = useState([])
const [currentProject, setCurrentProject] = useState('')
const [currentTask, setCurrentTask] = useState([])

const url = Connection
const datum = useContext(dataContext)

useEffect(() => {
  //fetches projects
  fetch(`${url}devops`)
      .then((res) => res.json())
      .then((res) => {setProjects(res)
      console.log("Projects Data:", projects)
      })
      .catch(console.err);

  //fetches users
  fetch(`${url}user`)
      .then((res) => res.json())
      .then((res) => {setDevs(res)
      console.log("Dev Data:", devs)
      })
      .catch(console.err);

  //fetches tasks
  fetch(`${url}task`)
      .then((res) => res.json())
      .then((res) => {
          
          const allTasks = []
          console.log("Task/ToDo Data:", tasks)
          //changes all unassigned tasks to the first project
          res.map( (task) => {
            console.log("mapping task:", task)
            if (task.length>0 && task.projectID.length<20){
              console.log("changed", task.name, "id:", task.projectID, projects[0]?._id)
              task.projectID = projects[0]._id
              axios.put(`${url}task/${task._id}`, task)
            }
            allTasks.push(task)
            console.log("alltasks mapped", allTasks)  
          } )

          console.log("tasks populated in the useContext:", tasks)
          //commenting and uncommenting the above log might fix/cause an error
          //if errors occur remove map until here. keep setTasks(tasks)
          setTasks(allTasks)
          console.log("tasks in datum:", datum.tasks) 
      })
      .catch(console.err);
  }, [currentProject])

  return (
    <div className="App">
      <dataContext.Provider value={{devs, setDevs, projects, setProjects, tasks, setTasks, currentProject, setCurrentProject, currentTask, setCurrentTask}}>
          
        <Header />
          
        <body className='main-body'>
          <SideNavbar />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/today" component={Today} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/completed" component={Completed} />
        </body>
         
      </dataContext.Provider>
    </div>
  );
}

export default App;
