
import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {UserContext} from '../App';
import adminDash from '../admin/adminDash';

const Navbar=()=> {
  // eslint-disable-next-line no-unused-vars
  const {state,dispatch} = useContext(UserContext);
  if(state)
  {
    return (
      
        <>
        <adminDash/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h1>Techlive</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link " aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">About</NavLink>
        </li>
        
       
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/technology" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Technology
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">PHP</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">JAVA</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Full Stack</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
    
      </ul>
    </div>
  </div>
</nav>

        </>
    )
      }
      else
      {
      return(<> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
      <h1>Techlive</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
      </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
    </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    <li className="nav-item">
     <NavLink className="nav-link" to="/login">Login</NavLink>
     </li>
              
       <li className="nav-item dropdown">
       <NavLink className="nav-link dropdown-toggle" to="/technology" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Technology
      </NavLink>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><NavLink className="dropdown-item" to="#">PHP</NavLink></li>
      <li><NavLink className="dropdown-item" to="#">JAVA</NavLink></li>
       <li><NavLink className="dropdown-item" to="#">Full Stack</NavLink></li>
      </ul>
      </li>
              
          
     </ul>
       </div>
       </div>
       </nav>
      </>)
      }
      
      }

export default Navbar;
