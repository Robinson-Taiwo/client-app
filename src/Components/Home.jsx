import React from 'react'
import "./Home.css"
import PageLayout from './PageLayout'
import read from "../assets/Read.svg"
import readm from "../assets/readm.svg"
import company from "../assets/company.svg"
import wifi from "../assets/wifi.svg"
import tech from "../assets/tech.svg"
import rocket from "../assets/rocket.svg"
import feat from "../images/feat.png"
import PostData from "./Data/index"
import PostCard from './PostCard'

const Home = () => {
  return (
    <PageLayout>
      <div className="Home">

        <section className="first">
          <p className="small"> POSTED ON <span className='bold' >STARTUP</span></p>

          <h1 className='heading'>Step-by-step guide to choosing</h1>
          <h1 className='heading'>great font pairs</h1>

          <p className='james'> By <span className='yellow'>James West </span>   |  May 23, 2022 </p>

          <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            <p>

              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </p>
          <button className='but1'><img src={read} alt="read-more-logo" /> </button>
        </section>

        <section className="second">

          <div className="feature">
            <h1 className='feat'>Featured Post</h1>

            <div className="cont">
              <img src={feat} className="h-[24.15rem] w-[91.57rem] " alt="featured post" />
              <p className='doe' >By John Doe | May 23, 2022</p>

              <div className="lorem">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing  <h1>elit, sed do eiusmod tempor.</h1></h1>
              </div>

              <div className="ipsum">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <p> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

              </div>
              <button className='but1'><img src={read} alt="read-more-logo" /> </button>

            </div>


          </div>

          <div className="allPost">

            <div className="all-post-head">
              <h1 className='all-post-head-h' >All Posts</h1>
              <p className="all-post-head-p">
                view all
              </p>
            </div>

            {PostData.map((data, index) => {
              return <PostCard {...PostData} index={index} title={data.title} author={data.author} date={data.date} />
            })}

          </div>

        </section>

        <section className="third">

          <div className="design">
            <div className='design-yellow' ></div>
            <div className='design-purple' ></div>
          </div>

          <div className="thirdbox">

            <div className='thirdbox-1'>
              <p className='about' >ABOUT US</p>

              <h1 className='community' >We are a community of content writers who share their learnings</h1>

              <p className='dolor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>

              <div>
                <img className='readm' src={readm} alt="" />
              </div>


            </div>

            <div className='thirdbox-2'>
              <p className="mission">OUR MISSION</p>

              <h1 className='content' >Creating valuable content for creatives all around the world</h1>

              <p className="amet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

            </div>


          </div>

        </section>

        <section className="fourth">

          <h1 className="choose">Choose A Catagory</h1>

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

              <h1  className='squarehead'>Technology</h1>
              <p className='squarepara' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

            </div>
          </div>

        </section>

      </div>

    </PageLayout>
  )
}

export default Home