import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const BookingClass = ({ data }) => {
  const { level } = data.contentfulClasses
  return (
    <Layout>
      <div>
        <h1>Title</h1>
        <p>{level}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinlgeClass($id: String) {
    contentfulClasses(id: { eq: $id }) {
      id
      date(formatString: "DD MMM, h:mma")
      fullyBooked
      level
      location
    }
  }
`

export default BookingClass
