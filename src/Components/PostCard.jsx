import React from 'react'
import "./PostCard.css"

const PostCard = ({author, title, date, index}) => {
    return (
        <div key={index} className='postcard'>

            <div className="postcard-head">
                by <span className='author' >{author} </span>  | {date}
            </div>

            <div className="postcard-title">
                {title}
            </div>


        </div>
    )
}

export default PostCard