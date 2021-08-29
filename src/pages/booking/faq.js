import React from "react"
import Layout from "../../components/Layout"
import "../../assets/styles/faq.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Link } from "gatsby"
import Seo from "../../components/Seo"

const faq = () => {
  return (
    <Layout>
      <Seo title="FAQ" />
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-ul">
          <li>
            Do I need my own surfskate?
            <p>
              NO! If you don't have your own surfskate yet, don't worry, The
              Surfskate Academy has a large stock of YOW surfskates. You can
              also take advantage of your class to do a test drive of all the
              YOW models that we have and know what type of board and wheelbase
              you like the most.
            </p>
          </li>
          <li>
            What if it’s called off due to weather conditions?
            <p>
              The class will be moved indoors, postponed, canceled and/or
              refunded
            </p>
          </li>
          <li>
            What if I need to cancel?
            <p>
              Cancelations can be made at 48 hrs with a full refund. Anything
              after will be charged.
            </p>
          </li>
          <li>
            How long is the class?
            <p>
              75 minutes for a group class and 60 minutes for a one to one
              session.
            </p>
          </li>
          <li>
            Can I get one to one coaching?
            <p>
              Yes, you can book 60 minutes sessions with me for £25 or a block
              of six one to one sessions for £135. Times can be arranged with me
              via email.
            </p>
          </li>
          <li>
            Will the class be the same time every week?
            <p>
              No, scheduling issues will make this impossible. There will be
              various slots and places available. You can book into the one that
              suits you best week on week.
            </p>
          </li>
          <li>
            Can I go to different places each week or do I need to book all my
            classes at the same place?
            <p>
              You can pick and choose. Times/places will differ so book onto the
              one that suits you best.
            </p>
          </li>
        </ul>
        <div className="no-answer">
          <h3>
            You didn't find what you are looking for? No worries, Get in touch
            by click on the link below and I will get back to you asap.
          </h3>
          <div className="send-booking">
            <a
              href="mailto:info@thesurfskateacademy?Subject=Booking"
              className="send-booking-btn"
            >
              <div className="send-booking-btn-wrapper">
                <p>SEND EMAIL</p>
              </div>
            </a>
            <p>
              or copy and paste my email address: info@thesurfskateacademy.com
            </p>
          </div>
        </div>
      </div>
      <Link to="/booking">
        <section className="back-to-booking">
          <p>back to booking</p>
          <HiOutlineArrowNarrowLeft />
        </section>
      </Link>
    </Layout>
  )
}

export default faq
