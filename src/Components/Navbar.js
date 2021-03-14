import React from 'react'
import logo from 'assets/images/logo2.png'
import 'assets/styles/navbar.css'

const Navbar = () => {
  return (
    <section className="container">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <img src={logo}  alt="logo.png" height="50" />
          <h4>Points Calculator</h4>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/Wyzardsleeves/tpg_code_project" target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
