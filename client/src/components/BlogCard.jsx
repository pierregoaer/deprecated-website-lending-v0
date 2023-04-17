import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/cta-main.css';

export default function BlogCard({blogData}) {
    return (
        <div className="blog-card--container">
            <div className="blog-card--text">
                <h3>{blogData.title}</h3>
                <Link to={'/contact'} className="blog-read-more">Lire la suite</Link>
            </div>
        </div>
    );
}
