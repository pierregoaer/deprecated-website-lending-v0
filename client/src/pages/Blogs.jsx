import React, {useState, useEffect} from 'react';
import BlogCard from "../components/BlogCard.jsx";

import '../styles/blogs.css';

export default function Blogs() {
    const [blogs, setBlogs] = useState({})
    const [blogsFetched, setBlogsFetched] = useState(false)

    useEffect(function () {
        fetch(
            "http://127.0.0.1:5000/get-blogs",
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setBlogsFetched(true)
            })
    }, [])
    let blogElements = []

    if (blogsFetched) {
        blogElements = blogs.map(blog => {
            return <BlogCard key={blog.id} blogData={blog}/>
        })
    }

    return (
        <>
            <section className="blogs--container">
                <div className="section--inner blogs--main">
                    <div className="blogs--text">
                        <h1>Blog</h1>
                        <h3>Vous cherchez un expert en électricité à Nîmes?</h3>
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
