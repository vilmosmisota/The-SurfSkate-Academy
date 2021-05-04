import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../assets/styles/homeOutro.css"

const HomeOutro = () => {
  return (
    <section className="home-outro-container">
      <div className="home-link-to-coaching">
        <h2>
          <span>One-to-One</span> and <span>Group</span> coaching
        </h2>
        <p>To Find Out More...</p>
        <Link to="/coaching">
          <button>CLICK HERE</button>
        </Link>
      </div>
      <div className="home-outro-img-container">
        <StaticImage
          src="../assets/images/portrait.jpg"
          alt="portrait photo"
          width={550}
          layout="constrained"
          quality={95}
          placeholder="none"
          className="home-portrait-img"
        />
      </div>
      <div className="home-bio-container">
        <p>
          My name is Sebastian Jimenez. I am an ex-pro skateboarder and a
          passionate surfer. I have been very interested in the surf skate
          training format for several years and I have verified that the results
          are immediate. Being able to pass on my experience and see progress in
          people is something I enjoy.
        </p>
      </div>
    </section>
  )
}

export default HomeOutro
