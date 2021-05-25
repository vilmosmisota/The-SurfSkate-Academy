import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/coachingComp.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BookingIcon from "../components/BookingIcon"

const coaching = () => {
  return (
    <Layout>
      <header>
        <div>
          <StaticImage src="../assets/images/coaching_group.jpg" />
        </div>
        <div className="header-headline-container coaching-header">
          <h1>GROUP AND ONE-TO-ONE COACHING</h1>
        </div>
        <div className="design-shape-container"></div>
      </header>
      <section className="coachingComp-container">
        <div className="summup-message-container coaching-summup-wrapper">
          <h1>
            It's really fun and it makes you feel like
            <span> surfing on asphalt</span>
          </h1>
        </div>
        <div>
          <p>
            Training on land is key to improving your surfing. You can spend
            hours in the water repeating the same mistakes without realizing it,
            creating bad habits and frustration without any real progress. This
            training modality corrects and builds your muscle memory so that you
            can then apply your new movements next time in the water. One of the
            objectives is to be able to make you learn to understand the basic
            principles of a correct technique so that later you can correct
            yourself after each wave and you can continue training with your
            surfskate whenever you have free time. It's really fun and it really
            makes you feel like surfing on asphalt.
          </p>
        </div>
        <div>
          <h2>Why is it good to do a course of a minimum of 6 classes?</h2>
          <p>
            Having a surfskate will undoubtedly help you improve your technique
            and balance a bit but there is a big difference when you take a
            class or a course. Depending on your level of control, a single
            class can help you create awareness of the great learning potential
            that a surfskate can give you but it will not be enough to analyze
            your mistakes and correct them. We believe that with a course of 6
            classes an initial adaptation to your equipment can be achieved,
            learn the basic requirements for correct posture, find your mistakes
            to be able to practice exercises to improve them and be able to
            create the ability to be able to self-analyze and realize when
            something feels wrong. We try to have groups of no more than 8
            students and preferably on the same level.
          </p>
          <div className="about-img-container">
            <StaticImage
              src="../assets/images/coaching_group.jpg"
              alt="surfskating in Edinburgh"
              width={500}
              layout="constrained"
              quality={95}
              placeholder="none"
              className="about-img"
            />
          </div>
        </div>
        <div>
          <h2>Will a course of 6 classes be enough? </h2>
          <p>
            It depends a lot on your level of control but the principle of
            training is the same for everyone. The more you train, the more you
            will improve. After taking a course, it is very likely that you will
            want to take another course at a more advanced level and continue to
            progress. What I want is to see happy surfers !
          </p>
          <div className="about-img-container">
            <StaticImage
              src="../assets/images/coaching_course.jpg"
              alt="surfskating in Edinburgh"
              width={500}
              layout="constrained"
              quality={95}
              placeholder="none"
              className="about-img"
            />
          </div>
        </div>
        <div>
          <h2>What happens in a one to one?</h2>
          <p>
            The one to one format is a completely personalized experience
            tailored to individual needs. A more detailed training is delivered,
            meaning individual progression is faster.
          </p>
          <div className="about-img-container">
            <StaticImage
              src="../assets/images/coaching_onetoone.jpg"
              alt="surfskating in Edinburgh"
              width={500}
              layout="constrained"
              quality={95}
              placeholder="none"
              className="about-img"
            />
          </div>
        </div>
        <section>
          <Link to="/classes">
            <div className="book-message">
              <h1>Book Your Class Here</h1>
              <BookingIcon />
            </div>
          </Link>
        </section>
      </section>
    </Layout>
  )
}

export default coaching
