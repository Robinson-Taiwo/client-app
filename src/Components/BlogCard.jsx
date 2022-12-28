import React from 'react'
import "./BlogCard.css"

const BlogCard = ({ img, category, heading, text, key }) => {
    return (
        <div key={key} className='blogcard' >

            <div className="bcimage">
                <img src={`/${img}.png`} alt="" className='blogPics' />
            </div>

            <div className="bcContents">
                <p className="bCategory">
                    {category}
                </p>

                <div className="blogHeading">
                    {heading}
                </div>


                <div className="bctext">
                    {text}
                </div>

            </div>

        </div>
    )
}

export default BlogCard
