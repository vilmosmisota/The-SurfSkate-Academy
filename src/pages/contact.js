import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/contact.css"
import Seo from "../components/Seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Get in touch" />
      <main className="contact-page">
        <h1>
          If you have questions or just want to say 'Hi', drop me an email and I
          will get back to you as soon as possible.
        </h1>

        <a href="mailto:info@thesurfskateacademy.com?Subject=General">
          <div>
            <p>SEND EMAIL</p>
          </div>
        </a>

        <p> or copy and paste my email address: info@thesurfskateacademy.com</p>
      </main>
    </Layout>
  )
}

export default contact
