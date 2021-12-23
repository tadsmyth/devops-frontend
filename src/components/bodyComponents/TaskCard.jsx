import React from 'react';

const TaskCard = ( {task} ) => {
  // console.log("task within taskcard", task)
  return (
    <div class="card">
      <div class="card-body">
        
        <h5 class="card-title">{task?._id}</h5>
        <p class="card-text">This is task is from {task?.projectID}.</p>
      </div>
    </div>
  );
};

export default TaskCard;