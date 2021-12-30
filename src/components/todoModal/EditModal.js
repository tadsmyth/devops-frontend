import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Connection from '../../Connection'
import EditTask_ProjectID from './EditTask-ProjectID.jsx'
import EditTaskStatus from './EditTaskStatus';
import Completed from '../todoModal/Completed';

function EditModal(props) {
  const url = Connection
  const [task, setTask] = useState(
      {
        name: '',
        completed: false
    })
    
  const handleTaskNameChange = e => {
    setTask(previousState => ({
      ...previousState,
      name: e.target.value
    }))
  }

   const handleDelete = e => {
    e.preventDefault()

  axios.delete(`${url}task`, task)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  }
    
  const handleTaskSubmit
   = e => {
    e.preventDefault()
  
    console.log("Modal taskId",props.taskId);
    axios.put(`${url}${props.taskId}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })

      setTask('')
  }

    return (
        <>
            <Modal
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleTaskSubmit
        }>
          <Modal.Body>
            <input
              type="text"
              name="task"
              onChange={handleTaskNameChange}
              placeholder="Task Name"
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="Description"
                as="textarea"
                name="description"
                placeholder="Description"
                onChange={handleTaskSubmit}
                rows={3}
              />
            </Form.Group>

            <EditTask_ProjectID />
            <EditTaskStatus task={task} setTask={setTask}/>

          </Modal.Body>
          <Button type="submit">Update Task</Button>
          <Completed />
          <button onclick={handleDelete}>Delete</button>
          
        </form>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default EditModal;