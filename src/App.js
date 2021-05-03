import React from 'react'
import Home from './home/Home';
import Produits from './produits/Produits';
import Shop from './shop/Shop';
import Blog from './blog/Blog';
import {BrowserRouter as Router,  Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Produits">Produits</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Route path="/" exact component={Home} />
<Route path="/Produits" component={Produits} />
<Route path="/Shop" component={Shop} />
<Route path="/Blog" component={Blog} />
    </div>
    </Router>
  );
}

export default App;
