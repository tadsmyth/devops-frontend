import React, {useState} from 'react';
import {BiDotsVerticalRounded, BiComment} from 'react-icons/bi'
import {FaRegFlag} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'

function TodoForm(props) {
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState({
        task: "",
        description: ""
        // icon: BiDotsVerticalRounded
    })
    const [inputValue3, setInputValue3] = useState('')
    const [icon, setIcon] = useState(false)

    const handleChange = e => {
        setInputValue(e.target.value)
        
    }

        const [hover, setHover] = useState(false);
        const onHover = () => {
          setHover(!hover)
        }
        const [hover2, setHover2] = useState(false);
        const onHover2 = () => {
          setHover(!hover2)
        }


    const handleTaskChange = e => {
        setInputValue2({...inputValue2, task: e.target.value})
    }
    const handleDescriptionChange = e => {
        setInputValue2({...inputValue2, description: e.target.value})
    }

    const handleChange3 = e => {
        setInputValue3(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random()* 1000),
            text: inputValue,
            button: icon
        })

        setInputValue('')
        setIcon()
    }

    const handleSubmit2 = e => {
        e.preventDefault();

        props.onSubmit({
            // id: Math.floor(Math.random()* 1000),
            text: inputValue2,
            button: icon
        })

        setInputValue2('')
        setIcon()
    }

    // const handleSubmit3 = e => {
    //     e.preventDefault();

    //     props.onSubmit({
    //         // id: Math.floor(Math.random()* 1000),
    //         text: inputValue3,
    //         button: icon
    //     })

    //     setInputValue3('')
    //     setIcon()
    // }

// probably did this wrong i think i just have to map through it im going to try that later
    return (
        <>
        <div className="">
            {/* The hover state is cool but it makes hitting the button kinda tricky when it changes size. Thoughts on removing? - Tad */}
        <button className='btn btn-sm btn-dark' onMouseEnter={onHover} onMouseLeave={onHover} tabIndex='-3' >
      { hover ? "Comments" : <BiComment /> }
    </button>
        <button className='btn btn-sm btn-dark' onMouseEnter={onHover2} onMouseLeave={onHover2} tabIndex='-3' >
      { hover ? "Share" : <BsFillPersonPlusFill />}
    </button>
        </div>
            <form className='projectForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Project Name'
                    value={inputValue}
                    button={setIcon}
                    name='text'
                    className='todoInput'
                    onChange={handleChange}
                    />
                <button className='btn btn-sm btn-dark'>Add Project</button>
            </form>
            {/* not sure why its not working currently */}

            
            {icon ? <div>
            <BiDotsVerticalRounded />
            </div> : null}
            <form className='taskForm' onSubmit={handleSubmit2}>
                <input
                    type='text'
                    placeholder='Add a task'
                    value={inputValue2.task}
                    name='task'
                    button={setIcon}
                    className='todoInput'
                    onChange={handleTaskChange}
                    />
                    {/* </form>
                    <form className='taskForms' onSubmit={handleSubmit3}> */}
                <input
                    type='text'
                    placeholder='Description'

                    value={inputValue2.description}
                    name='description'
                    button={setIcon}
                    className='todoInput'
                    onChange={handleDescriptionChange}
                    />
                    {icon ? <div>
            <FaRegFlag />
            </div> : null}

                <button className='btn btn-sm btn-dark'>Add task</button>
            </form>

        </>
    );
}

export default TodoForm;