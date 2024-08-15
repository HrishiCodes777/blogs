import React, { createContext, useState } from 'react';
import initialBlogs from '../BlogsData';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [searchQuery, setSearchQuery] = useState('');

    const addBlog = (newBlog) => {
        setBlogs([...blogs, newBlog]);
    };

    const filteredBlogs= blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // console.log(blogs);
    return (
        <BlogContext.Provider value={{ blogs: filteredBlogs, addBlog, handleSearch }}>
            {children}
        </BlogContext.Provider>
    );
};