import React, {useState} from 'react';
import {BsSearch, BsBell} from 'react-icons/bs'
import {GrHomeRounded} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'

function Header(props) {


    return (
        <>
        <div className="headerNav">
            {/* this is a dummy logo we will actually make a logo later */}
            <h2 classname="companyName">DevOps</h2>
            {/* you can keep this search bar in the Nav or the header */}
            <div className="home">
                <GrHomeRounded />
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search"/>
            <button className="searchBtn">
                <BsSearch />
            </button>
            </div>
            <div className="quickAdd"><AiOutlinePlus />
            </div>
            <div className="notif">
                <BsBell />
            </div>
        </div>
        </>
    );
}

export default Header;