import React, { useState, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Connection from "../../Connection";
import dataContext from "../Context";
import './CSS/addTask.css'

const initialState = {
  //modify to get initial state of active task?
  //modify to get initial state of active project
  task: "",
  description: "",
};

function TodoModal(props) {
  const url = Connection;
  const [formData, setFormData] = useState(initialState);

  // function handleChange(event) {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [event.target.name]: event.target.value,
  //   }));
  // }

  // function handleSubmit(event) {
  //     event.preventDefault();

  //   // send form data to AiOutlinePlus
  //   // send data form to task
  //   // Add ID of the task to the project

  // }

  const datum = useContext(dataContext);

  const [task, setTask] = useState({
    name: "",
    completed: false,
  });

  const handleEditFormChange = (e) => {
    setTask((previousState) => ({
      ...previousState,
      name: e.target.value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    axios.post(`${url}task`, task).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    setTask("");
  };

  return (
    <>
      <Modal
      id="todoModalDesign"
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Task</Modal.Title>
        </Modal.Header>

        <form onSubmit={handleEditSubmit}>
          <Modal.Body >
            <input
              type="text"
              name="task"
              onChange={handleEditFormChange}
              placeholder="Task Name"
              className="taskName"
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
                onChange={handleEditFormChange}
                rows={3}
              />
            </Form.Group>
          </Modal.Body>

          <Button type="submit">Add task</Button>
        </form>

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoModal;
