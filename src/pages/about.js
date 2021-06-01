import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/about.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const about = () => {
  return (
    <Layout>
      <Seo title="About" description="Introduction" />
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
      <section className="summup-message-container about-headline-wrapper">
        <div>
          <h1>My name is Sebastian Jimenez.</h1>
          <h1>
            Welcome to the <span>SurfSkate academy</span>
          </h1>
        </div>
      </section>
      <section className="about-bio-first">
        <div className="about-paragraph-container">
          <p>
            Since I was a child and all throughout my adolescence, skateboarding
            was my passion. My twin brother and I spent all day on a skateboard
            and the fact that we were twins and that we were both very good made
            us more competitive, which helped us go far. We both became
            recognised skaters with sponsors like VANS, magazine appearances,
            and lots of good competition results. From a very young age I was
            always a bit obsessed with observing my own technique and that of
            others. I realized that I had talent but if I really wanted to go
            far I had to be able to understand when I made mistakes in my
            technique, and at the same time know how to understand biomechanics
            in order to correct them.
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
        <div className="about-paragraph-container">
          <p>
            I developed a great ability to observe and understand how to achieve
            the movements. This observation skill became a habit and became part
            of my daily life both with the sport and with myself. My interest in
            body language became part of my profession as a lifeguard. During my
            almost 20 years of profession on the beaches of the Atlantic,
            Pacific and Mediterranean, knowing how to observe people's body
            language helped me to be able to identify vulnerable swimmers long
            before the water reached their knees. All of this I have also
            applied to surfing from day one.
          </p>
          <p>
            I have worked as a surf instructor and surf coach for years in surf
            schools in Europe, Central America and South America. Being able to
            pass on my experience and see progress in people is something I
            really enjoy. I have had good results in competitions and have been
            a sponsored surfer for several years now. I have lived in Edinburgh,
            Scotland for 5 years and my profession as a surf coach and surf
            advisor is growing more and more.
          </p>
        </div>
        <div className="about-img-container">
          <StaticImage
            src="../assets/images/about_surf.jpg"
            alt="surfskating in Edinburgh"
            width={500}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="about-img"
          />
        </div>

        <div className="about-paragraph-container">
          <p>
            I have been very interested in the surfskate training format for
            several years and I have verified that the results are immediate.
            Scotland has very good waves but there is a lack of consistency and
            the cold weather could often make us stay at home. Surfskate
            training courses are ideal for all skill levels of surfers but
            without a doubt the benefit for Scottish surfers is even greater!
          </p>
        </div>
        <div className="about-img-container">
          <StaticImage
            src="../assets/images/about_surfskate_training.jpg"
            alt="surfskating in Edinburgh"
            width={500}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="about-img"
          />
        </div>
      </section>
    </Layout>
  )
}

export default about
