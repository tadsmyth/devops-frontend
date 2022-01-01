import React from 'react';

const EditTaskStatus = ({task} , {setTask}) => {

  const handleStatusChange = e => {
    // setTask(previousState => ({
    //   ...previousState,
    //   status: e.target.value
    // }))
  }

  return (
    <>
      This is test data for Editing status
    <input type="checkbox" id="status" name="status" value="notStarted">
      Not Started
    </input>
    
    <input type="checkbox" id="status" name="status" value="inProgress" >
      In Progress
    </input>

    <input type="checkbox" id="status" name="status" value="inReview">
      In review
    </input>

    </>
    
    
  );
};

export default EditTaskStatus;