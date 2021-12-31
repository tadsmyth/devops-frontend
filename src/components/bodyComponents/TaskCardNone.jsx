import React from 'react';

const TaskCardNone = () => {
  return (
    <>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">No Tasks found</h5>
        <p class="card-text">Panda is bored. zzzzzzzzzzzz.</p>
        <button className="button">Edit</button>
      </div>
    </div>
    </>
  );
};

export default TaskCardNone;