import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to the Blog</h1>
            <p>Explore our latest posts and updates. Dive into the world of blogging with us!</p>
            <div className='home-buttons'>
                <Link to='/blogs' className='home-button'>View Blogs</Link>
                <Link to='/create' className='home-button'>Create a Blog</Link>
            </div>
    </div>
  )
}

export default Home
