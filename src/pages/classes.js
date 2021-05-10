import React from "react"
import Layout from "../components/Layout"
import "../assets/styles/classes.css"
import GetAllClasses from "../components/GetAllClasses"

const classes = () => {
  return (
    <Layout>
      <main className="class-page">
        <section className="class-header">
          <h1>UPCOMING CLASSES</h1>
        </section>
        <article className="class-table">
          <div className="class-table-header">
            <div className="col1">
              <h3>Level</h3>
            </div>
            <div className="col2">
              <h3>Date</h3>
            </div>
            <div className="col3">
              <h3>Location</h3>
            </div>
            <div className="col4">
              <h3>Booking</h3>
            </div>
          </div>
        </article>
        <GetAllClasses />
      </main>
    </Layout>
  )
}

export default classes
