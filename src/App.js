import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from 'components/Router'
import Header from './pages/common/header';
import Footer from './pages/common/footer';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Root>
      <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Header />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
      </div>
    </Root>
  )
}

export default App
