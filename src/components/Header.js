import React from 'react';
import { BsBell, BsHouse, BsGear} from 'react-icons/bs'
import {Link, Router} from 'react-router-dom'
import Adding from './todoModal/Adding'
import CurrentProject from './CurrentProject'
import dataContext from './Context'
import {datum} from './CurrentProject'

// import logo from '../logos/Dev.png'
import {CgInfinity} from 'react-icons/cg'

function Header(props) {

    return (
<>
<nav className="header navbar flex-row flex-wrap navbar-expand-lg bg-primary navbar-dark py-1 fixed-top container-fluid">
  <a className="navbar-brand" href="#">

  <CgInfinity className='m-1' size={45} />

      {/* <img src={logo}  width="30" height="24" class="d-inline-block align-text-top"/> */}
      DevOps

      </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarToggler">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <Link to="/">
        <li className="nav-item active">
        <a className="nav-link m-2" href="#">
        <span className="sr-only"><BsHouse size={30}/></span>
                </a>
        </li>
      </Link>

            {/* Change later for message modal */}
      <Link to="/today">
        <li className="nav-item">
        <a className="nav-link m-2" href="#">
        <BsBell size={30}/>
                </a>
        </li>
      </Link> 

      <Link to="/settings">
        <li className="nav-item">
        <a className="nav-link m-2" href="#">
        <BsGear size={30}/>
                </a>
        </li>
      </Link>

      <li>
        <Adding />
      </li>

    </ul>


    <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
        <h4 className='justify-center p-1 text-light'>Current Project Name</h4>
    </ul>

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search Tasks" />

    </form>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>

  </div>
</nav>
    </>
    );
}

export default Header;




