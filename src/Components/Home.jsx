import React, { useEffect } from 'react'
import "./Home.css"
import PageLayout from './PageLayout'
import read from "../assets/Read.svg"
import readm from "../assets/readm.svg"
import company from "../assets/company.svg"
import wifi from "../assets/wifi.svg"
import tech from "../assets/tech.svg"
import rocket from "../assets/rocket.svg"
import Logo1 from "../assets/Logo1.svg"
import Logo2 from "../assets/Logo2.svg"
import Logo3 from "../assets/Logo3.svg"
import Logo4 from "../assets/Logo4.svg"
import profilepics from "../assets/profilepics.png"
import arrow1 from "../assets/Arrow1.svg"
import arrow2 from "../assets/Arrow2.svg"
import Button from "../assets/Button.svg"
import feat from "../images/feat.png"
import together from "../images/together.png"
import PostData from "./Data/index"
import ProfileData from "./Data/ProfileData"
import PostCard from './PostCard'
import ProfileCard from './ProfileCard'
// import axios from 'axios'

const Home = () => {


  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyCFsnNY8pe5FOWQtMakzuiYFW98hhJG-ec")
  //     .then(response => console.log(response))
  // }

  // )


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
              <p id="mission">OUR MISSION</p>

              <h1 id='content' >Creating valuable content for creatives all around the world</h1>

              <p className="amet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

            </div>


          </div>

        </section>

        <section className="fourth">

          <h1 className="choose">Choose A Category</h1>

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



        </section>

        <section className="fifth">
          <img src={together} alt="together" className="together" />
          <div className="why">

            <h4 className='we' >WHY WE STARTED</h4>

            <h1 className='started'>It started out as a simple idea and evolved into our passion</h1>

            <p className='elit' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <img className='discover' src={Button} alt="" />

          </div>
        </section>

        <section className="sixth">
          <h1 className="authors">
            List of Authors
          </h1>

          <div className="profile">
            {ProfileData.map((profile, index) => {
              return <ProfileCard name={profile.name} image={profile.image} job={profile.job} />
            })}
          </div>

        </section>

        <secction className="seventh">
          <div className="featin">
            <p className="featout">
              we are
            </p>
            Featured in
          </div>

          <div className="logo1">
            <img src={Logo1} alt="" />

          </div>
          <div className="logo2">
            <img src={Logo2} alt="" />
          </div>
          <div className="logo3">  <img src={Logo3} alt="" />
          </div>
          <div className="logo4">  <img src={Logo4} alt="" />
          </div>

        </secction>

        <div className="eight">
          <div className="testimonial">
            <div className="testi">
              TESTIMONIALs
            </div>
            <h1 className="say">
              What people say about our blog
            </h1>
            <p className="sayt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

          </div>



          <div className="vline">

          </div>

          <div className="magna">

            <div className="mtop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="mbottom">

              <div className="id">

                <div className="pp">
                  <img src={profilepics} alt="" />
                </div>

                <div className="pinfo">
                  <p className="pname">
                    Jonathan Vallem
                  </p>
                  <div>
                    New york, USA
                  </div>
                </div>

              </div>

              <div className="arrow">

                <div className='arrow2' >
                  <img src={arrow2} alt="" />
                </div>

                <div className='arrow1' >
                  <img src={arrow1} alt="" />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="ninth">

          <div className="nin">

            <h1 className="team">
              Join our team to be a part of our story
            </h1>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>

            <button className="join">
              join now
            </button>

          </div>

        </div>

      </div>

    </PageLayout>
  )
}

export default Home