import React from 'react';
import {Link} from 'react-router-dom';


export default function BlogCard({blogData}) {
    return (
        <div className="blog-card--container">
            <div className="blog-card">
                <div className="blog-card-thumbnail-container">
                    <img className="blog-card-thumbnail" src={blogData.thumbnailImageUrl} alt=""/>
                </div>
                <div className="blog-card-text-container">
                    <p className="blog-card-date">{`${blogData.date} - ${blogData.readingTime} minutes de lecture`}</p>
                    <h3 className="blog-card-title">{blogData.title}</h3>
                    <p className="blog-card-description">{blogData.metaDescription}</p>
                    <Link to={'/contact'} className="blog-card-read-more">Lire la suite</Link>
                </div>
            </div>
        </div>
    );
}
