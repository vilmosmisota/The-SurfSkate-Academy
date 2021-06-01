import React from "react"
import Layout from "../../components/Layout"
import "../../assets/styles/prices.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Link } from "gatsby"
import Seo from "../../components/Seo"

const prices = () => {
  return (
    <Layout>
      <Seo title="Prices" description="Explain Prices and payment info" />
      <div className="prices-page">
        <h1>Prices</h1>
        <ul className="prices-ul">
          <li>
            Group class (90 minutes)
            <p>£15</p>
          </li>
          <li>
            One-to-one class (60 minutes)
            <p>£25</p>
          </li>
          <li>
            Course of 6 classes in a group
            <p>£80</p>
          </li>
          <li>
            One-to-one course of 6 classes
            <p>£135</p>
          </li>
        </ul>
        <div className="extra-info-prices">
          <h4>
            Payments can be made via bank transfer or PayPal. Once your booking
            gets confirmed, you'll be given the details of your prefered method
            of payment.
          </h4>
          <h4>
            If the class is called off due to weather conditions it will be
            moved indoors, postponed, canceled and/or refunded
          </h4>
          <h4>
            Cancelations can be made until 48 hrs beforehand and these will be
            issued with a full refund or you can reschedule to another session.
            Anything after 48hrs will be charged in full.
          </h4>
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

export default prices
