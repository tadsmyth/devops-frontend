import React, { useContext, useEffect } from 'react';
import dataContext from './Context';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentProject = () => {

  let datum = useContext( dataContext )
    // useEffect( () => {
    //    if(datum.projects.length)
    //         { datum.setCurrentProject = datum.projects[0]._id
    //         }
    //         console.log("initial project:", datum.projects.id);
    // }, [])


// Create func called setCurrentProject and get the ID 

// const setCurrentProject = ()  => {

//   let proj = useContext( dataContext )
//   useEffect( () => {
//     return datum.setCurrentProject._id
//   }, )

// }
    function setCurrentProject(project) {
      datum.setCurrentProject(project)
      console.log("currentProject:" , datum.currentProject)
    }
  
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className='project-button' variant="success" id="dropdown-basic">
          Projects
        </Dropdown.Toggle>

          <Dropdown.Menu>
              {/* <Dropdown.Item href="#">Project 1</Dropdown.Item> */}
              {datum.projects.map( (project) => 
                <Link to={`/devops/${project._id}`}>
                  <Dropdown.Item onClick={ () =>setCurrentProject(project)} href='#'>        
                    {project.name}
                  </Dropdown.Item>
                </Link> 
                )}
              {/* Returning undefined... */}
          
   {/* Need to add the current projects to the dropdown menu. It's rendering the projects so what do I need to do to it?  */}
   {/* Maybe on click just use setCurrentProject to update the state? */}

          </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export default CurrentProject;
