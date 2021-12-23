import React, { useContext, useEffect } from 'react';
import dataContext from './Context';


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
      Current project button

    </div>
  );
};

export default CurrentProject;