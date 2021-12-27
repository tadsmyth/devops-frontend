import React, { useContext, useEffect } from 'react';
import dataContext from './Context';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentProject = () => {

  let datum = useContext( dataContext )
    useEffect( () => {
       if(datum.projects.length)
            { let currentProjID = datum.projects[0]._id
            console.log("Datum from CurrP:", datum)
            console.log("Projs:", datum.projects, " || Current:", currentProjID)
            console.log("Devs:", datum.devs)
            console.log("tasks:", datum.tasks)}
            console.log("clicked on", datum.projects.id);
    }, [datum])




  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className='project-button' variant="success" id="dropdown-basic">
          Projects
        </Dropdown.Toggle>

          <Dropdown.Menu>
              {/* <Dropdown.Item href="#">Project 1</Dropdown.Item> */}
              {datum.projects.map( project => <Link to={`/${project._id}`}><Dropdown.Item href='#'>{project.name}</Dropdown.Item></Link> )}

          </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export default CurrentProject;