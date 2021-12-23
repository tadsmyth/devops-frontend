import React, { useContext, useEffect } from 'react';
import dataContext from './Context';
import { Dropdown } from 'react-bootstrap';




const CurrentProject = () => {

  let datum = useContext( dataContext )
  
    useEffect( () => {
       if(datum.projects.length)
            { let currentProjID = datum.projects[0]._id
            console.log("Datum from CP:", datum)
            console.log("Projs:", datum.projects, " || Current:", currentProjID)
            console.log("Devs:", datum.devs)
            console.log("tasks:", datum.tasks)}
    }, [datum])

  return (
    <div>
      <Dropdown>
  <Dropdown.Toggle className='project-button' variant="success" id="dropdown-basic">
   Projects
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </div>
  );
};

export default CurrentProject;