import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { BlogContext } from './BlogContext';

function BlogList() {
    const { blogs } = useContext(BlogContext);

    if(!blogs) return <p>....Loading</p>;

    return (
    <div>
        <h2>Blog Posts</h2>
        <ul className='blog-list'>
        {blogs.map(blog => (
            <li className="blog" key={blog.id}>
            <Link to={`/blog/${blog.id}`} className='blog-title-link'>
                <h3 className='blog-title'>{blog.title}</h3>
            </Link>
            <p>{blog.content}</p>
            <p>Posted by: {blog.author}</p>
            <p>Date: {blog.date}</p>
            </li>
        ))}
        </ul>
    </div>
    );
}

export default BlogList;
