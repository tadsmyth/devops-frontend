import React, {useState} from 'react';

function TodoForm(props) {
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')

    const handleChange = e => {
        setInputValue(e.target.value)
        
    }

    const handleChange2 = e => {
        setInputValue2(e.target.value)
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

            <form className='taskForm' onSubmit={handleSubmit2}>
                <input
                    type='text'
                    placeholder='add a task'
                    value={inputValue2}
                    name='text'
                    className='todoInput'
                    onChange={handleChange2}
                    />
                <button>Add task</button>
            </form>
        </>
    );
}

export default TodoForm;