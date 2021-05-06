import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/about.css"

const About = () => {
  return (
    <>
      <header className="about-header">
        <div className="header-img-container">
          <StaticImage
            src="../assets/images/about_portrait.jpg"
            alt="surf training in Edinburgh"
            width={550}
            layout="constrained"
            quality={100}
            className="header-img"
            placeholder="none"
          />
          <div className="about-header-headline-container">
            <h1>
              “Being able to pass on my experience and see progress in people is
              something I enjoy."
            </h1>
          </div>
        </div>
        <div className="design-shape-container"></div>
      </header>
      <section className="about-welcome-container">
        <div>
          <h2>My name is Sebastian Jimenez.</h2>
          <h3>
            Welcome to the <span>SurfSkate</span> academy!
          </h3>
        </div>
      </section>
      <section className="about-bio-first">
        <div className="about-paragraph-container">
          <p>
            Since I was a child and all my adolescence, skateboarding was my
            passion. My twin brother and I spent all day on a skateboard and the
            fact that we were twins, and that we were both very good, made us
            more competitive which helped us go far.We both became recognized
            skaters with sponsors like VANS, magazine appearances, and lots of
            good competition results. From a very young age I was always a bit
            obsessed with observing my own technique and that of others. I
            realized that I had talent but if I really wanted to go far.
          </p>
        </div>
        <div className="about-img-container">
          <StaticImage
            src="../assets/images/about_skate.jpg"
            alt="surfskating in Edinburgh"
            width={500}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="about-img"
          />
        </div>
      </section>
    </>
  )
}

export default About
