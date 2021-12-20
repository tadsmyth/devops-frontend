import React, {useState} from 'react';
import {FaChevronRight, FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {BsFillArrowLeftSquareFill, BsSearch,BsFillArrowRightSquareFill} from 'react-icons/bs'


function Navbar(props) {
    // const [showLinks, setShowLinks] = useState(false);
    const [unclick, setUnclick] = useState('false');
    const [submenu, setSubmenu] = useState('false');

    return (
<>
        <div className="d-flex flex-column vh-50 flex-shrink-0 p-3 text-white bg-dark mt-3">
    <hr/>
    <br />
    <ul class="nav nav-pills flex-column mb-auto">
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><MdOutlineSpaceDashboard size={25}/>  Dashboard</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendar size={22}/>   Today</span> </a> </li>
        <li> <a href="#" class="nav-link text-white"> <span class="ms-2"><FaRegCalendarAlt size={22}/>   Upcoming</span> </a> </li>
    </ul>
</div>



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