import React, {useContext}  from 'react';
import dataContext from '../Context';

const EditTaskProjectID = () => {
  const datum = useContext(dataContext)
  return (
    <>
    <p>Current ID: {datum.currentTask.projectID}</p>
    <input type="text" name="projectID" placeholder={datum.currentTask.projectID} />
    </>  
  );
};

export default EditTaskProjectID;