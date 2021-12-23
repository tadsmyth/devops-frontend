import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import CreatingTasks from './components/bodyComponents/CreatingTasks';
import dataContext from './components/Context';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Fetch from './components/Fetch';
import {useState, useEffect} from 'react'
import Dashboard from './components/navBar/Dashboard'
import Today from './components/navBar/Today'
import Upcoming from './components/navBar/Upcoming'
import Completed from './components/navBar/Completed'
import Settings from './components/navBar/Settings'

function App() {

const [devs, setDevs] = useState([])
const [projects, setProjects] = useState([])
const [tasks, setTasks] = useState([])
const [currentProject, setCurrentProject] = useState('')

const url = "http://localhost:4000/"

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
      .then((res) => {setTasks(res)
      console.log("Task/ToDo Data:", tasks)
      })
      .catch(console.err);

  }, [])

  return (
    <div className="App">
      <dataContext.Provider value={{devs, setDevs, projects, setProjects, tasks, setTasks, currentProject, setCurrentProject}}>
          {/* <Fetch /> */}
          
          {/* {projects ? projects.map((p) => <p>{p.name}</p>) : null} */}
          {/* <Header /> */}
          {/* isnt working not sure why */}
          {/* <SideNavbar /> */}
          {/* <Route exact path="/" /> */}
          <body className="container fluid justify-content-center text-center">
         <SideNavbar />
         {/* <Dashboard /> */}

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/today" component={Today} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/completed" component={Completed} />
          </body>
          
          {/* <CreatingTasks /> */}
          
      </dataContext.Provider>
    </div>
  );
}

export default App;
