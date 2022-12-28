import React from 'react'
import "./Navbar.css"
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='Navbar'>

            <div className='logo'>
                <img src={Logo} alt="" />
            </div>

            <div className="nav">

                <div className="links">
                    <Link to="/" className='inks' >Home</Link>
                    <Link to="/blog" className='inks'> Blog</Link>
                    <Link to="/about" className='inks'>About us</Link>
                    <Link to="/contacts" className='inks'>Contact us</Link>
                </div>

                {/* <Link to="/suscribe" className='but'>suscribe</Link> */}
                <a className='but' href="#suscribe">suscribe</a>

            </div>



        </section>
    )
}

export default Navbar