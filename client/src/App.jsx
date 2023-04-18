import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CTAMain from './components/CTAMain';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogArticle from './pages/BlogArticle';

import './styles/styles.css';

function App() {
    const [blogsData, setBlogsData] = useState({})
    const [blogsFetched, setBlogsFetched] = useState(false)

    useEffect(function () {
        fetch(
            "http://127.0.0.1:5000/get-blogs",
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                setBlogsData(data)
                setBlogsFetched(true)
            })
    }, [])
    return (
        <>
            <Nav/>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route path={'/services'} element={<Services/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route exact path={'/blog'} element={<Blogs blogsData={blogsData} blogsFetched={blogsFetched}/>}/>
                <Route path={'/blog/:blogUrl'} element={<BlogArticle blogsData={blogsData} blogsFetched={blogsFetched}/>}/>
            </Routes>
            <CTAMain/>
            <Footer/>
        </>
    );
}

export default App;
