import React from 'react';
import { BsBell, BsHouse, BsGear} from 'react-icons/bs'
import logo from '../logos/Dev.png'







function Header(props) {


    return (
<>
<nav className="navbar flex-row flex-wrap navbar-expand-lg bg-primary navbar-dark py-3 fixed-top container-fluid">
  <a className="navbar-brand" href="#">
      <img src={logo}  width="30" height="24" class="d-inline-block align-text-top"/>
      DevOps
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarToggler">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link m-3" href="#"><span className="sr-only"><BsHouse size={30}/></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link m-3" href="#"><BsBell size={30}/></a>
      </li>
      <li className="nav-item">
        <a className="nav-link m-3" href="#"><BsGear size={30}/></a>
      </li>
    </ul>
    <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
        <h2 className='justify-center p-3 text-light'>Current Project Name</h2>
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




// Need to put this search bar in the main task area, not the nav bar. - Tad


