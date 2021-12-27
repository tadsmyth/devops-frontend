import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

function EditModal(props) {

    const [task, setTask] = useState(
        {
          name: '',
          completed: false
      })
    
    const handleChange2 = e => {
      setTask(previousState => ({
        ...previousState,
        name: e.target.value
      }))
    }
    
    const handleSubmit2 = e => {
      e.preventDefault()
    
      console.log("Modal taskId",props.taskId);
      axios.put(`http://localhost:4000/task/${props.taskId}`)
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
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
        <form onSubmit={handleSubmit2}>
          <Modal.Body>
            <input
              type="text"
              name="task"
              onChange={handleChange2}
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
                onChange={handleSubmit2}
                rows={3}
              />
            </Form.Group>
          </Modal.Body>
          <Button type="submit">Edit Task</Button>
        </form>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default EditModal;