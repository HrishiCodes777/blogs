import React from 'react';
import blogs from '../BlogsData';
import { useParams } from 'react-router-dom';

function BlogDetail() {

    const {id} = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if(!blog){
        return <p className="blog-detail-not-found">Blog not found!</p>;
    }
    return (
        <div className="blog-detail">
            <h2 className="blog-detail-title">{blog.title}</h2>
            <p className="blog-detail-author"><strong>Author:</strong> {blog.author}</p>
            <p className="blog-detail-date"><strong>Date:</strong> {blog.date}</p>
            <p className="blog-detail-content">{blog.content}</p>
        </div>
    )
}

export default BlogDetail;
