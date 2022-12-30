import React from 'react'
import "./Contact.css"
import PageLayout from './PageLayout'

const Contact = () => {
  return (
    <PageLayout>

      <section className="contact">


        <div className="contactAll">



          <div className="contactTop">

            <h2 className='contactHead' >  CONTACT US</h2>

            <div className="convo">
              Let’s Start a Conversation
            </div>

            <div className="contactText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </div>
          </div>

          <div className="contactSecond">

            <div className="contactUs">
              <p className="hours">
                Working hours
              </p>

              <div className="contactLine"></div>

              <div className="contactDay">
                Monday To Friday
              </div>

              <div className="contactDay">
                9:00 AM to 8:00 PM
              </div>

              <div className="contactTeam">
                Our Support Team is available 24/7
              </div>

            </div>

            <div className="working">

              <p className="hours">
                Contact Us
              </p>

              <div className="contactLine"></div>


              <div className="contactDay">
                020 7993 2905
              </div>

              <div className="contactTeam">
                hello@finsweet.com
              </div>

            </div>
          </div>

          <section className="contactThird">
            <input type="text" className="contactInput" placeholder='Full Name' />
            <input type="email" className="contactInput" placeholder='Your Email' />
            <input type="text" className="contactInput" placeholder='Query Related' />
            <input type="text" className="contactInput1" placeholder='Message' />

            <div className="contactButton">
              Send Message
            </div>
          </section>


        </div>


      </section>


    </PageLayout>
  )
}

export default Contact