import React from 'react'
import socialmedia from "../images/social-media.png"
import "./ProfileCard.css"

const ProfileCard = ({image, name, job}) => {
  return (
    <div className='profileCard' >
        <img className="imgcard" src={`/${image}.png`} alt="" />

        <div className="name2">{name}</div>
        <div className="job">{job}</div>

        <div>

            <img src={socialmedia} alt="social-media" />
        </div>
    </div>
  )
}

export default ProfileCard
