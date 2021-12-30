import React, {useState} from 'react';
import axios from 'axios';
import EditModal from '../todoModal/EditModal';
import Completed from '../todoModal/Completed';
import Connection from '../../Connection'

const TaskCard = ( {task} ) => {
  const url = Connection
  const [taskEdit, setTaskEdit] = useState(
    {
      name: task.name,
      description: task.description,
      completed: false
  })

  // const getData = e => {
  //   e.preventDefault()

  // axios.get(`http://localhost:4000/`, task._id)
  //   .then(res => {
  //     console.log(res)
  //     console.log("im getting it", task._id)
  //     console.log(res.data)
  //   })
  // }

  const handleDelete = e => {
    e.preventDefault()

  axios.delete(`${url}task`, task)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  }

  const handleEdit = e => {
    e.preventDefault()

  axios.put(`${url}task${task._id}`, task)
    .then(res => {
      console.log(res)
      console.log("task card", task._id);
      console.log(res.data)
    })
  }
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div class="card">
      <div class="card-body">
        {console.log(task)}
        <h5 class="card-title">{task?.name}</h5>
        <p value= "task.name" class="card-text">This is task is from {task?.name}.</p>
        <button className="nav-item" variant="primary" onClick={() => setModalShow(true)} taskId={task._id}>Edit</button>
        <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        taskId= {task._id}
        />
        <button onclick={handleDelete}>Delete</button>
        <Completed />
      </div>
    </div>
  );
};

export default TaskCard;