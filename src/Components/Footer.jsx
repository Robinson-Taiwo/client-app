import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import socialb from "../assets/socialb.svg"

import "./Footer.css"



const Footer = () => {



  return (
    <div className='footer'  >
      <div className="navb">

        <img src={Logo} alt="" />

        <div className="footnav">

          <div className="footlinks">
            <Link to="/" className='inks' >Home</Link>
            <Link to="/blog" className='inks'> Blog</Link>
            <Link to="/about" className='inks'>About us</Link>
            <Link to="/contacts" className='inks'>Contact us</Link>
            <Link to="/private-policy" className='inks'>privacy policy</Link>

          </div>


        </div>

      </div>
      <div className="foot2">
        <div className='subs' >
          Subscribe to our newsletter to get latest updates and news
        </div>

        <div className="foot3" id='suscribe' >
          <input className='footinput' placeholder='Enter Your Email' type="text" />
          <button className='utt' >suscribe</button>
        </div>


      </div>

      <div className="bottom">
        <div className="address">
          <div className="add">
            Finstreet 118 2561 Fintown
          </div>
          <div className="add">
            Hello@finsweet.com  020 7993 2905
          </div>
        </div>

        <div className="media">
          <img src={socialb} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
