import React, {useState} from 'react';

function TodoForm(props) {
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [inputValue3, setInputValue3] = useState('')

    const handleChange = e => {
        setInputValue(e.target.value)
        
    }

    const handleChange2 = e => {
        setInputValue2(e.target.value)
    }

    const handleChange3 = e => {
        setInputValue3(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random()* 1000),
            text: inputValue
        })

        setInputValue('')
    }

    const handleSubmit2 = e => {
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random()* 1000),
            text: inputValue2
        })

        setInputValue2('')
    }

    const handleSubmit3 = e => {
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random()* 1000),
            text: inputValue3
        })

        setInputValue3('')
    }
// probably did this wrong i think i just have to map through it im going to try that later
    return (
        <>
            <form className='projectForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Project Name'
                    value={inputValue}
                    name='text'
                    className='todoInput'
                    onChange={handleChange}
                    />
                <button>Add Project</button>
            </form>
            {/* not sure why its not working currently */}
            <form className='taskForm' onSubmit={handleSubmit2 && handleSubmit3}>
                <input
                    type='text'
                    placeholder='Add a task'
                    value={inputValue2}
                    name='text'
                    className='todoInput'
                    onChange={handleChange2}
                    />
                    {/* </form>
                    <form className='taskForms' onSubmit={handleSubmit3}> */}
                <input
                    type='text'
                    placeholder='Description'
                    value={inputValue3}
                    name='text'
                    className='todoInput'
                    onChange={handleChange3}
                    />
                <button>Add task</button>
            </form>
        </>
    );
}

export default TodoForm;