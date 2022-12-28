import React from 'react'
import company from "../assets/company.svg"
import wifi from "../assets/wifi.svg"
import tech from "../assets/tech.svg"
import rocket from "../assets/rocket.svg"
import "./Categories.css"

const Categories = () => {
  return (
    <div className='fourth1' >
      <div className="square">
        <div className="economy">
          <div className="imagediv">
            <img className='squareimage' src={company} alt="" />

          </div>
          <h1 className='squarehead'>Business</h1>

          <p className='squarepara' > Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="economy1">

          <div className="imagediv">

            <img className='squareimage' src={rocket} alt="" />
          </div>

          <h1 className='squarehead' >Startup</h1>

          <p className='squarepara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>


        </div>
        <div className="economy">
          <div className="imagediv">
            <img className='squareimage' src={wifi} alt="" />

          </div>
          <h1 className='squarehead'>Economy</h1>

          <p className='squarepara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

        </div>
        <div className="economy">
          <div className="imagediv">
            <img className='squareimage' src={tech} alt="" />

          </div>

          <h1 className='squarehead'>Technology</h1>
          <p className='squarepara' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

        </div>
      </div>
    </div>
  )
}

export default Categories
