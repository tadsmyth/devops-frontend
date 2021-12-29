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
        <div>
            <input
            completed={!completed}
            onChange={handleChange} type="checkbox"></input>
            <span>
                Completed
            </span>
        </div>
        </>
    );
}

export default Completed;