import React, {useState} from 'react';
import {FaChevronRight, FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar, FaCog, FaPlus} from 'react-icons/fa'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {BsFillArrowLeftSquareFill, BsSearch,BsFillArrowRightSquareFill} from 'react-icons/bs'
import '../App.css'


function Navbar(props) {
    // const [showLinks, setShowLinks] = useState(false);
    const [unclick, setUnclick] = useState('false');
    const [submenu, setSubmenu] = useState('false');



  // Menu hide and return button/function??? - Tad

    return (
<>
<div className='wrapper'>
    {/* wrapper contains sidebar */}
    <div className='sidebar'>
        <div className='user'>
           <a href='users'> <img src='https://randomuser.me/api/portraits/men/11.jpg' alt='profile pic'/></a>
            <h3>John Smith</h3>
        </div>

        {/* menu items in here */}
        <ul className='list-group'>
                
                <a href="#" class="list-group-item list-group-item-action active p-3">
                       <MdOutlineSpaceDashboard size={25} className='m-2'/>
                       Dashboard
                    </a>
                
                
                    <a href="#" class="list-group-item list-group-item-action active p-3">
                       <FaRegCalendar size={22} className='m-2'/>
                       Today
                    </a>
                
                
                    <a href="#" class="list-group-item list-group-item-action active p-3">
                       <FaRegCalendarAlt size={22} className='m-2'/>  Upcoming
                    </a>
                
               
                    <a href="#" class="list-group-item list-group-item-action active p-3">
                       <FaCog size={22} className='m-2' />
                        Settings
                    </a>
                    <a href="#" class="list-group-item list-group-item-action active p-3 bg-dark">
                       <FaPlus size={22} className='m-2' />
                        New Project
                    </a>
                
        </ul>

    </div>
</div>


{/* <div className="d-flex flex-column vh-50 flex-shrink-0 p-3 text-white bg-dark mt-3">
    <hr/>
    <br />
    <ul class="nav nav-pills flex-column mb-auto">
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><MdOutlineSpaceDashboard size={25}/>  Dashboard</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendar size={22}/>   Today</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendarAlt size={22}/>   Upcoming</span> </a> </li>
    </ul>
</div> */}



 {/* when the screen is regular and isnt clicked the arrow will show to the left and all the nav stuff will show */}
        {/* as the screen gets smaller or the arrow is clicked the arrow will switch to the right and only the nav icons will show */}
        {/* click on the arrow works you just have to add the css */}
        <div className={`side-bar ${unclick ? 'unclick' : ''}`}>
            <div onClick={() => {setUnclick(!unclick)}} className="toggleBtn">
                {/* when you click this another menu btn will show */}
                {unclick ? <BsFillArrowRightSquareFill/> : <BsFillArrowLeftSquareFill /> }
            </div>
           

       
            {/* im the side bar */}
            <ul ClassName="navbar">
                {/* stretch goal */}
                {/* <li><FaInbox /> Inbox</li> */}
                {/* brings in tasks due today */}

                {/* brings in upcoming tasks when clicked */}
            {/* <li className="menu" onClick={() => setShowLinks(!showLinks)}>☰</li> */}
            </ul>
            <div className={`projectNav ${submenu ? 'submenu' : ''}`}>
                <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Projects</h2>
                </div>
            <ul className="dummyProjects">Projects will be here</ul>
            <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Label</h2>
                </div>
                <div onClick={() => {setSubmenu(!submenu)}}>
                {submenu ? <FaChevronRight /> : <FaChevronDown />}
                <h2>Filter</h2>
                </div>
            {/* adding the project components will go here I have to add them */}
            </div>
        </div>







</>

    );
}

export default Navbar;