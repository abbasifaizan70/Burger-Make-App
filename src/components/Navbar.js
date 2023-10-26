import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
return (
	<>
   <header>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <a href="index.html" class="navbar-brand"> <img src='/logo512.png' height="40px"></img></a>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link to="/" class="nav-link">Burger Builder</Link></li>
                    <li class="nav-item"><Link to="/Login" class="nav-link">Login</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
  </>
);
};

export default Navbar;
