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
      {/* This is test data for Editing status
    <input type="checkbox" id="status" name="status" value="notStarted" onChange={handleStatusChange}>
      Not Started
    </input>
    
    <input type="checkbox" id="status" name="status" value="inProgress" onChange={handleStatusChange}>
      In Progress
    </input>

    <input type="checkbox" id="status" name="status" value="inReview" onChange={handleStatusChange}>
      In review
    </input> */}

    </>
    
    
  );
};

export default EditTaskStatus;