import React, {useState} from 'react';
import axios from 'axios'
import dataContext from '../Context'
import { Children } from 'react/cjs/react.production.min';

function Completed(props) {
    const [completed, setCompleted] = useState(false)
    
    const handleChange = () => {
        setCompleted(!completed);
        console.log(completed);
        console.log("im clicked omg");
        axios.put(`http://localhost:4000/task/${props.completed}`)
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
      };

    return (
        <>
        <div class="form-check">
  <input completed={!completed}
            onChange={handleChange} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Completed
  </label>
</div>
        </>
    );
}

export default Completed;