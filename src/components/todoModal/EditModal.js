import React, {useState, useContext, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Connection from '../../Connection'
import EditTaskProjectID from './EditTaskProjectID.jsx'
import EditTaskStatus from './EditTaskStatus';
import Completed from '../todoModal/Completed';
import dataContext from '../Context';

function EditModal(props) {
  const url = Connection
  const datum = useContext(dataContext)
  const [task, setTask] = useState([])
  
  useEffect( () => {
    //sets local useState task as the task found in datum
    
    console.log("EditModal Active Task:", datum.task)
  }, [])
    
    
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
    //.then remove from datum
    //.then close modal - add new modal that task is updated
  }
    
  function handleTaskSubmit(e) {
    e.preventDefault();
    const tempTask = props.task;
    
    if (e.target.name.value)
      tempTask.name = e.target.name.value;
    if (e.target.projectID)
      tempTask.projectID = e.target.projectID.value;


    console.log("!!!!!!!-->tempTask/Task", tempTask);
    axios.put(`${url}task/${props.taskId}`, tempTask)
      .then(res => {
        //update datum
        datum.setCurrentTask(tempTask);
        datum.setTasks(...datum.tasks, tempTask);
        console.log(res);

      });


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

          <form onSubmit={handleTaskSubmit}>
          
          <Modal.Body>
            <p>Task Name: {props.task.name}</p>
            <input
              type="text"
              name="task"
              id="name"
              // onChange={handleTaskNameChange}
              placeholder={props.task.name}
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <p>Description: </p>
              <p>{props.task.description}</p>
              <Form.Control
                className="Description"
                as="textarea"
                name="description"
                id="description"
                placeholder={props.task.description}
                // onChange={handleTaskSubmit}
                rows={3}
              />
            </Form.Group>

            <EditTaskProjectID />
            {/* <EditTaskStatus /> */}

            </Modal.Body>

            <Modal.Footer>
              <button className="button" onclick={handleDelete} >Delete</button>
              <Button type="submit" >Update Task</Button>
              <Completed />
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

          </form>

        </Modal>
      </>
    );
}

export default EditModal;