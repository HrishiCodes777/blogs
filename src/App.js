import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import { BlogProvider } from './components/BlogContext';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <BlogProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<h1>Home Page</h1>}/>
              <Route path='/blogs' element={<BlogList />}/>
              <Route path="/blog/:id" element={<BlogDetail />}/>
              <Route path="/create" element={<BlogForm />}/>
              <Route path='*' element={<h1>404 not found</h1>}/>
            </Routes>
          </Layout>
        </BlogProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
