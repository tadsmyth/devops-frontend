import React, { useContext, useEffect } from 'react';
import dataContext from './Context';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentProject = () => {

  let datum = useContext( dataContext )
    useEffect( () => {
       if(datum.projects.length)
            { let currentProjID = datum.projects[0]._id
            }
            console.log("clicked on", datum.projects.id);
    }, [datum])


// Create func called setCurrentProject and get the ID 

// const setCurrentProject = ()  => {

//   let proj = useContext( dataContext )
//   useEffect( () => {
//     return datum.setCurrentProject._id
//   }, )

// }
  

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className='project-button' variant="success" id="dropdown-basic">
          Projects
        </Dropdown.Toggle>

          <Dropdown.Menu>
              {/* <Dropdown.Item href="#">Project 1</Dropdown.Item> */}
              {datum.projects.map( project => <Link to={`/${project._id}`}><Dropdown.Item onClick={ datum.setCurrentProject (project._id) } href='#'>{project.name}</Dropdown.Item></Link> )}
              {/* Returning undefined... */}
          {console.log(datum.CurrentProject._id)}
   {/* Need to add the current projects to the dropdown menu. It's rendering the projects so what do I need to do to it?  */}
   {/* Maybe on click just use setCurrentProject to update the state? */}

          </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export default CurrentProject;
