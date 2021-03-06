import React, { useState } from "react"
import { Link } from "gatsby"
import "../assets/styles/navbar.css"
import Logo from "../assets/svg/Logo"
import MenuIcon from "../assets/svg/MenuIcon"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const setShowFalse = () => {
    setShow(false)
  }

  const active = {
    color: "var(--pink)",
    fontWeight: "bold",
  }

  return (
    <nav>
      <Link to="/">
        <div className="logo-container">
          <Logo />
        </div>
      </Link>
      <div className="navlinks1-container">
        <ul className={show ? "nav-list-1 show" : "nav-list-1"}>
          <button
            onClick={setShowFalse}
            className="li-item-small-screen nav-icon-cls-btn"
          >
            <AiOutlineClose />
          </button>
          <Link to="/about" onClick={setShowFalse} activeStyle={active}>
            <li>ABOUT</li>
          </Link>
          <Link to="/contact" onClick={setShowFalse} activeStyle={active}>
            <li>CONTACT</li>
          </Link>
          <Link to="/booking" onClick={setShowFalse} activeStyle={active}>
            <li className="li-item-small-screen">BOOKING</li>
          </Link>
          {/* <Link to="/booking" onClick={setShowFalse}>
            <li className="li-item-small-screen">BOOKING</li>
          </Link> */}
          <Link to="/classes" onClick={setShowFalse}>
            <li className="li-item-small-screen">CLASSES</li>
          </Link>
          <div className="li-item-small-screen nav-icon-container">
            <Link to="/reviews" onClick={setShowFalse}>
              <AiOutlineStar />
            </Link>
            <button onClick={setShowFalse}>
              <a
                href="https://www.instagram.com/thesurfskateacademy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </a>
            </button>
            <Link to="/" onClick={setShowFalse}>
              <AiOutlineHome />
            </Link>
          </div>
        </ul>
      </div>
      <div className="navlinks2-container">
        <ul className="nav-list-2">
          <Link to="/booking" activeStyle={active}>
            <li>BOOKING</li>
          </Link>
          <Link to="/classes" activeStyle={active}>
            <li>CLASSES</li>
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
