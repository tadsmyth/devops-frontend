import React, {useContext}  from 'react';
import dataContext from '../Context';

const EditTaskProjectID = () => {
  const datum = useContext(dataContext)
  return (
    <input type="text" name="projectID" placeholder='Project ID' 
    value={datum.currentTask.projectID} />
      
  );
};

export default EditTaskProjectID;