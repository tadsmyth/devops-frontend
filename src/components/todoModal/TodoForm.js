import React, {useState, useContext} from 'react';
import dataContext from '../Context'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaRegFlag} from 'react-icons/fa'
import CurrentProject from '../CurrentProject';
import axios from 'axios'
import TodoModal from './TodoModal';
import Connection from '../../Connection'

function TodoForm(props) {
  const url = Connection
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
    
  const handleSubmit = e => {
      e.preventDefault()
    
      axios.post(`${url}devops`, project)
        .then(res => {
          datum.setProjects([...datum.projects, res])
          console.log(datum.projects)
          console.log(res.data)
        })
        
    }

  const resetFeild = () => {
      document.getElementByClassName('projectForm').reset()
    }


return (
  <>
    <div className="dashHeader">
      <CurrentProject />
        {/* The hover state is cool but it makes hitting the button kinda tricky when it changes size. Thoughts on removing? - Tad */}

<<<<<<< HEAD
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
=======
            <div className='projectForm'>
            <form onSubmit={handleSubmit}>
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
            </div>

            <div className="taskForm">
            <form className="">
            <input className="taskInputField" type="search" placeholder="Search Tasks" />
            <button className="taskBtn" type="submit"> <AiOutlineSearch /></button>
            </form>
            </div>
>>>>>>> 5eb7cc2 (search/project Input bars done)

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