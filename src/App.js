import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import blogs from './BlogsData';
import { useState } from 'react';
function App() {
  const [initialBlogs,setBlogs] = useState(blogs);

  const createBlog = (newBlog) =>{
    setBlogs([...initialBlogs,newBlog]);
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout>
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>}/>
            <Route path='/blogs' element={<BlogList blogs={initialBlogs}/>}/>
            <Route path="/blog/:id" element={<BlogDetail blogs={initialBlogs}/>}/>
            <Route path="/create" element={<BlogForm addBlog={createBlog} blogs={initialBlogs}/>}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
