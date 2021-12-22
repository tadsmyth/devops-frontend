import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import Contents from './components/Contents';
import CreatingTasks from './components/bodyComponents/CreatingTasks';
import dataContext from './components/Context';
import Fetch from './components/Fetch';
import {useState, useEffect} from 'react'

function App() {

const [devs, setDevs] = useState([])
const [projects, setProjects] = useState([])
const [tasks, setTasks] = useState([])

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
      console.log("Task/To-Do Data:", tasks)
      })
      .catch(console.err);

  }, [])

  return (
    <div className="App">
      <dataContext.Provider value={{devs, setDevs, projects, setProjects, tasks, setTasks}}>
          {/* <Fetch /> */}
          <h1>Todo</h1>
          <Header />
          <Contents />
          <CreatingTasks />
      </dataContext.Provider>
    </div>
  );
}

export default App;
