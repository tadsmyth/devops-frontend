import React, {useState, useContext} from 'react';
import dataContext from '../Context'
import {BiDotsVerticalRounded, BiComment} from 'react-icons/bi'
import {FaRegFlag} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'
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
      }
      
    // const handleChange = e => {
    //     setInputValue(e.target.value)
        
    // }

        const [hover, setHover] = useState(false);
        const onHover = () => {
          setHover(!hover)
        }
        const [hover2, setHover2] = useState(false);
        const onHover2 = () => {
          setHover2(!hover2)
        }

        const handleSubmit = e => {
            e.preventDefault()
          
            axios.post('http://localhost:4000/devops', project)
              .then(res => {
                datum.setProjects([...datum.projects, res])
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
        <div className="btn-group">
    <CurrentProject />
            {/* The hover state is cool but it makes hitting the button kinda tricky when it changes size. Thoughts on removing? - Tad */}
        <button
        className='btn btn-sm btn-dark'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        tabIndex='-3' >
      { hover ? "Comments" : <BiComment /> }
    </button>

        <button
        className='btn btn-sm btn-dark'
        onMouseEnter={onHover2}
        onMouseLeave={onHover2}
        tabIndex='-3' >
      { hover2 ? "Share" : <BsFillPersonPlusFill />}
    </button>

<form className='projectForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Project Name'
                    // value={''}
                    button={setIcon}
                    name='text'
                    className="todoInput"
                    onChange={handleChange}
                    />
                <button className='btn btn-sm btn-dark' type="submit" onclick={resetFeild}>Add Project</button>
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