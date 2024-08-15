import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout>
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>}/>
            <Route path='/blogs' element={<BlogList/>}/>
            <Route path="/blog/:id" element={<BlogDetail/>} />
            <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
