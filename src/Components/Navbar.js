import React from 'react'
import logo from 'assets/images/logo3.png'
import 'assets/styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="container">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img src={logo}  alt="logo.png" height="44" />
          <h4>Calculator</h4>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/Wyzardsleeves/tpg_code_project" target="_blank" rel="noreferrer" className="blue-text text-darken-4">Github</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
