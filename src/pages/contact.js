import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/contact.css"

const contact = () => {
  return (
    <Layout>
      <main className="contact-page">
        <div className="contact-page-message">
          <h1>Have any quetions or just want to say Hi?</h1>
          {/* <h2>
            No worries. Just get in touch below and I will get back to you as
            soon as possible.
          </h2> */}
        </div>
        <article>
          <h1>GET IN TOUCH</h1>
          <form className="contact-form">
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn block">
              submit
            </button>
          </form>
        </article>
      </main>
    </Layout>
  )
}

export default contact
