import React from 'react'
import PageLayout from './PageLayout'
import read from "../assets/Read.svg"
import next from "../assets/next.svg"
import prev from "../assets/prev.svg"

import blog1 from "../images/blog1.png"
import blogData from "../Components/Data/blogData"
import "./Blog.css"
import BlogCard from './BlogCard'
import Categories from './Categories'
import Join from './Join'

const Blog = () => {
  return (
    <PageLayout>

      <section className='blog' >

        <div className="blogTop">

          <div>



            <p className="blogp">
              Featured Post
            </p>

            <h1 className="blogpairs">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className='jane'> By <span className='purple'>John Doe  </span>|   May 23, 2022  </p>

            <div className="bloglorem">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </div>
            <button className='but1'><img src={read} alt="read-more-logo" /> </button>
          </div>

          <div className="blogimg">
            <img src={blog1} alt="" />
          </div>
        </div>

      </section>

      <section className="blogsecond">

        <h1 className="blogall">
          All posts
        </h1>

        <div className="blogline"></div>

        <div className="blogcsection">
          {blogData.map((item, index) => {
            return (
              <BlogCard img={item.img} heading={item.heading} key={index} text={item.text} category={item.category} />
            )
          })}
        </div>

      </section>
      <section className="blogthird">
        <div className="prev">
          <img src={prev} alt="" />
        </div>

        <div className="next">
          <img src={next} alt="" />
        </div>

      </section>

      <section className="blogfourth">
        <div className="blogf1">
          All Categories
          <Categories />

<section className="blogfifth">
  <Join/>
</section>

        </div>
      </section>

    </PageLayout>
  )
}

export default Blog
