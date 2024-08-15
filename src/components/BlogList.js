// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../BlogsData';
import '../App.css';

function BlogList() {
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
