import React, {useState} from 'react';
import axios from 'axios';
import EditModal from '../todoModal/EditModal';

const TaskCard = ( {task} ) => {
  // console.log("task within taskcard", task)
  const [taskEdit, setTaskEdit] = useState(
    {
      name: task.name,
      description: task.description,
      completed: false
  })



  const getData = e => {
    e.preventDefault()

  axios.get('http://localhost:4000/task', task)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  }

  const handleDelete = e => {
    e.preventDefault()

  axios.delete('http://localhost:4000/task', task)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  }

  const handleEdit = e => {
    e.preventDefault()

  axios.post('http://localhost:4000/task', task)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div class="card">
      <div class="card-body">
        
        <h5 class="card-title">{task?._id}</h5>
        <p value= "task.name" class="card-text">This is task is from {task?.name}.</p>
        <button className="nav-item" variant="primary" onClick={() => setModalShow(true)}>Edit</button>
        <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <button onclick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;