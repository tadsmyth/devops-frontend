import React, {useState, useContext} from 'react';
import dataContext from '../Context'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaRegFlag} from 'react-icons/fa'
import CurrentProject from '../CurrentProject';
import axios from 'axios'
import TodoModal from './TodoModal';

function TodoForm(props) {
    const [project, setProject] = useState({
        name: '',
        tasks: []
    })
    const [icon, setIcon] = useState(false)
    const [task, setTask] = useState([])
    let datum = useContext( dataContext )

    const handleChange = e => {
        setProject(previousState => ({
          ...previousState,
          name: e.target.value,
        //   tasks: {TodoModal: e.target.value}
        }))
        setProject('')
      }
      
    // const handleChange = e => {
    //     setInputValue(e.target.value)
        
    // }

        const handleSubmit = e => {
            e.preventDefault()
          
            axios.post('http://localhost:4000/devops', project)
              .then(res => {
                datum.setProjects([...datum.projects, res])
                console.log(datum.projects)
                console.log(res.data)
              })
              // .then(() => {
              //   // let projectField = document.findElementByClassName("todoInput")
              //   console.log("im before the projects omg");
              //   document.findElementByClassName("todoInput").value = project.name
              //   console.log("im in the projects omg");
              // })
          }

        const resetFeild = () => {
            document.getElementByClassName('projectForm').reset()
          }


return (
        <>
        <div className="dashHeader">
          <CurrentProject />
            {/* The hover state is cool but it makes hitting the button kinda tricky when it changes size. Thoughts on removing? - Tad */}

            <form className='projectForm' onSubmit={handleSubmit}>

                <input
                    type='text'
                    placeholder='Project Name'
                    // value={''}
                    button={setIcon}
                    name='text'
                    className="projectInputField"
                    onChange={handleChange}
                    />

                <button className='projectBtn' type="submit" onclick={resetFeild}>Add Project</button>

            </form>
            
            <form className="taskForm">
            <input className="taskInputField" type="search" placeholder="Search Tasks" />

            <button className="taskBtn" type="submit"><AiOutlineSearch /></button>
            </form>

        </div>
            
            {/* not sure why its not working currently */}
            {icon ? <div>
            <BiDotsVerticalRounded />
            </div> : null}
                    {/* </form>
                    <form className='taskForms' onSubmit={handleSubmit3}> */}
                    {icon ? <div>
            <FaRegFlag />
        </div> : null}
    </>
    );
}


export default TodoForm;