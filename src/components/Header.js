import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/header.css"

const Header = () => {
  return (
    <header>
      <div className="header-img-container">
        <StaticImage
          src="../assets/images/The-SurfSkate-Academy_Header_img.jpg"
          alt="surf training in Edinburgh"
          width={550}
          layout="constrained"
          quality={100}
          className="header-img"
          placeholder="none"
        />
        <div className="header-headline-container">
          <h1>ON LAND SURF TRAINING</h1>
          <h2>FOR ALL LEVELS OF SURFERS</h2>
          <h2>IN SCOTLAND</h2>
        </div>
      </div>
      <div className="design-shape-container"></div>
    </header>
  )
}

export default Header
