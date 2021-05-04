import { Link } from "gatsby"
import React from "react"
import "../assets/styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <section className="footer-main-section-container">
        <Link to="/contact" className="link-container">
          <div>
            <p>
              let’s have a <span>Chat</span>
            </p>
          </div>
        </Link>
        <Link to="/classes" className="link-container">
          <div>
            <p>
              <span>Book</span> a class with me
            </p>
          </div>
        </Link>
        <Link to="/reviews" className="link-container">
          <div>
            <p>
              love to hear your <span>Feedback</span>
            </p>
          </div>
        </Link>
        <a
          href="https://www.instagram.com/thesurfskateacademy/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-container"
        >
          <div>
            <p>
              connect with me on <span>Social</span>
            </p>
          </div>
        </a>
      </section>
      <section className="footer-law-section-container">
        <p>copyright © 2021 The SurfSkate Academy All rights reserved</p>
        <p>webdevelopment and design by Vilmos Misota</p>
      </section>
    </footer>
  )
}

export default Footer
