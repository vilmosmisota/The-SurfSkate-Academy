import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/booking.css"
import GetAllClasses from "../components/GetAllClasses"
import { Link } from "gatsby"

const classes = () => {
  return (
    <Layout>
      <header className="classes-header-container">
        <section className="how-to-book">
          <h3>How to book:</h3>
          <p>
            Pick the date which best suits your lifestyle and email me the date
            of the class with some introduction of your experience. Just keep an
            eye out on the availability row as classes can be fully booked. Once
            I confirm your booking, you'll be given all the info you need to
            make the payment (more info regards payment: "PRICES").
          </p>
          <h5>Location might change within the given area</h5>
        </section>
        <div className="send-booking">
          <a
            href="mailto:info@thesurfskateacademy?Subject=Booking"
            className="send-booking-btn"
          >
            <div className="send-booking-btn-wrapper">
              <p>SEND BOOKING</p>
            </div>
          </a>
          <p>
            or copy and paste my email address: info@thesurfskateacademy.com
          </p>
        </div>
      </header>
      <main className="class-page">
        <section className="class-header">
          <h1>UPCOMING CLASSES</h1>
          <p>
            GROUP classes only. For ONE-TO-ONE class get in touch with me via
            email/instagram
          </p>
        </section>
        <section className="classes-options">
          <Link to="/booking/faq">
            <div className="classes-info">
              <p>FAQ</p>
            </div>
          </Link>
          <Link to="/booking/prices">
            <div className="classes-info">
              <p>PRICES</p>
            </div>
          </Link>
        </section>
        <article className="class-table">
          <div className="class-table-header">
            <div className="col1">
              <h3>Date</h3>
            </div>
            <div className="col2">
              <h3>Location</h3>
            </div>
            <div className="col3">
              <h3>Availability</h3>
            </div>
          </div>
        </article>
        <GetAllClasses />
      </main>
    </Layout>
  )
}

export default classes
