import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BlogForm({addBlog,blogs}) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            id: blogs.length+1,
            title,
            author,
            content,
            date: new Date().toLocaleDateString(),
        };
        addBlog(newBlog);
        navigate('/blogs');
    }

    return (
        <div className='blog-form-container'>
            <h2>CreateBlog</h2>
            <form onSubmit={handleSubmit}>
                <div className='blog-input'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='blog-input'>
                    <label htmlFor='author'>Author:</label>
                    <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className='blog-input'>
                    <label htmlFor='date'>Date:</label>
                    <input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className='blog-input blog-textarea'>
                    <label htmlFor='content'>Content:</label>
                    <textarea id='content' value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default BlogForm;
