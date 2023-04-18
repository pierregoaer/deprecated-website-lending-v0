import React, {useState, useEffect} from 'react';
import BlogCard from "../components/BlogCard.jsx";


import '../styles/blogs.css';

export default function Blogs({blogsData, blogsFetched}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let blogElements = []

    if (blogsFetched) {
        blogElements = blogsData.map(blog => {
            return <BlogCard key={blog.id} blogData={blog}/>
        })
    }

    return (
        <>
            <section className="blogs--container">
                <div className="section--inner blogs--main">
                    <div className="blogs--text">
                        <h1>Blog</h1>
                        <p>id eu duis laboris ex eiusmod consequat in proident sunt elit culpa Lorem aliquip mollit
                            id
                            cupidatat ex commodo sunt ipsum dolore reprehenderit mollit quis</p>
                    </div>
                    <div className="blogs--grid">
                        {blogElements}
                    </div>

                </div>
            </section>
        </>
    )
}
