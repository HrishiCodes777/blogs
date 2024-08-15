import React from 'react';
import blogs from '../BlogsData';

function BlogList() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul className='blog-list'>
        {blogs.map(blog => {
            return(<li className="blog" key={blog.id}>
                <h3 className='blog-title'>{blog.title}</h3>
                <p>{blog.content}</p>
                <p>Posted by: {blog.author}</p>
                <p>Date: {blog.date}</p>
            </li>);
        })}
      </ul>
    </div>
  )
}

export default BlogList;