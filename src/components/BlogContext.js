import React, { createContext, useState } from 'react';
import initialBlogs from '../BlogsData';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(initialBlogs);

    const addBlog = (newBlog) => {
        setBlogs([...blogs, newBlog]);
    };
    // console.log(blogs);
    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            {children}
        </BlogContext.Provider>
    );
};