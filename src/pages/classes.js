import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/classes.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BookingIcon from "../components/BookingIcon"
import Seo from "../components/Seo"

const coaching = () => {
  return (
    <Layout>
      <Seo title="Classes" description="One-to-One and group classes " />
      <header className="about-header">
        <div className="header-img-container">
          <StaticImage
            src="../assets/images/classes_top.jpg"
            alt="surf training in Edinburgh"
            width={550}
            layout="constrained"
            quality={100}
            className="header-img"
            placeholder="none"
          />
          <div className="about-header-headline-container">
            <h1>“GROUP and ONE-TO-ONE classes"</h1>
          </div>
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
          <h2>Group Class</h2>
          <p>
            Group classes are offered to everyone. These classes will include
            mixed levels and can be booked via email. You just choose the
            location, day and time that suits you best. Group classes are a fun
            way to meet like minded people, learn new techniques and will help
            you to improve your surfing!
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
          <h2>One-to-one class</h2>
          <p>
            If you'd like a more personalised experience, I also offer 60 minute
            session one-to-one classes. These can be organised with me via email
            or Instagram. I can tailor a course to your individual level, and
            times/days/locations can be arranged. Single classes and courses are
            availible.
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
        <div>
          <h2>Levels</h2>
          <p>
            I can cater to different levels, experience and goals in one to one
            classes. Group classes will be mixed levels and we´ll cover a
            variety of different techniques. Everybody is welcome, from beginner
            to advanced!
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
          <h2>Location</h2>
          <p>
            Locations can change and it won't be possible to book the same class
            on the same day weekly. This is due to scheduling issues and also
            demand for classes in certain locations. I am happy to cater to
            groups of 4 or more in requested locations so if you and some
            friends would like a class in a specific spot that's not advertised
            on the website, drop me an email and we can coordinate a class
            closer to home.
          </p>
          <div className="about-img-container">
            <StaticImage
              src="../assets/images/classes_location.jpg"
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
          <Link to="/booking">
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
