import React from "react"
import "../assets/styles/main.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
