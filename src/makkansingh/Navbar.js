import React from "react";
import logo from '../assets/logo mla.png'
import { NavLink } from "react-router-dom";
import '../style/Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar-page">
                <div>
                    <img src={logo} alt="" width='200px' />
                </div>
                <div className="navbar-list">
                    <ul>
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li><NavLink to='/about'>ABOUT US</NavLink></li>
                        <li><NavLink to='/'>ACOMPLISMENT</NavLink></li>
                        <li><NavLink to='/'>MULTIMEDIA</NavLink></li>
                        <li><NavLink to='/accomplishment'>ACCOMPLISHMENT</NavLink></li>
                        <li><NavLink to='/contactus'>CONTACT US</NavLink></li>
                        <li className="navlogin"><NavLink to='/login'>LOGIN</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;