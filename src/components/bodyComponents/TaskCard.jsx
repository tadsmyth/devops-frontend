import React, {useState, useContext} from 'react';
import axios from 'axios';
import EditModal from '../todoModal/EditModal';
import Connection from '../../Connection'
import dataContext from '../Context';

const TaskCard = ( {task} ) => {
  const url = Connection
  const datum = useContext(dataContext)
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

 

  const handleEdit = e => {
    e.preventDefault()

  axios.put(`${url}task${task._id}`, task)
    .then(res => {
      // console.log(res)
      // console.log("task card", task._id);
      // console.log(res.data)
    })
  }
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div class="card">
    <div class="card-body">
      
      <h5 class="title">{task?.name}</h5>
      <p value= "task.name" class="description">Desc: {task?.description}.</p>
      <p> Current Status: {task?.status}</p>
      <p> Developers: 
          <br />
          {task.devs.map( (dev) => {
            return <p>{dev}</p>
            
          })}
      </p>
      <button className="button" variant="primary" onClick={() => setModalShow(true)} taskId={task._id}>Edit</button>
      <EditModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      onClick={datum.setCurrentTask(task)}
      taskId= {task._id}
      />
      
      
    </div>
  </div>
  );
};

export default TaskCard;