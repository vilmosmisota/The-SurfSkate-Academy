import React, { useState } from "react"
import { Link } from "gatsby"
import "../assets/styles/navbar.css"
import Logo from "../assets/svg/Logo"
import MenuIcon from "../assets/svg/MenuIcon"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="navlinks1-container">
        <ul className={show ? "nav-list-1 show" : "nav-list-1"}>
          <Link to="/about" onClick={() => setShow(false)}>
            <li>ABOUT</li>
          </Link>
          <Link to="/contact" onClick={() => setShow(false)}>
            <li>CONTACT</li>
          </Link>
          <Link to="/booking" onClick={() => setShow(false)}>
            <li className="li-item-small-screen">BOOKING</li>
          </Link>
          <Link to="/lessons" onClick={() => setShow(false)}>
            <li className="li-item-small-screen">LESSONS</li>
          </Link>
          <li>
            <button
              className="li-item-small-screen"
              onClick={() => setShow(!show)}
            >
              <AiOutlineClose />
            </button>
          </li>
        </ul>
      </div>
      <div className="navlinks2-container">
        <ul className="nav-list-2">
          <Link to="/booking">
            <li>BOOKING</li>
          </Link>
          <Link to="/lessons">
            <li>LESSONS</li>
          </Link>
        </ul>
      </div>
      <div className="menu-icon-container">
        <button onClick={() => setShow(!show)}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
