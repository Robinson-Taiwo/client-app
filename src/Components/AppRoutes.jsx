import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Suscribe from './Suscribe'
import Blog  from "./Blog"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path='/suscribe' element={<Suscribe />} />

        </Routes>
    )
}

export default AppRoutes

