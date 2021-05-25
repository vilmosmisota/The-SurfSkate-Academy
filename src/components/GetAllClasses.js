import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/styles/getAllClasses.css"
// import BookingIcon from "./BookingIcon"

const query = graphql`
  {
    allContentfulClasses(sort: { fields: date }) {
      nodes {
        available
        date(formatString: "DD MMM, h:mm a")
        id
        location
        dateTitle
      }
    }
  }
`

const GetAllClasses = () => {
  const data = useStaticQuery(query)
  const classes = data.allContentfulClasses.nodes

  console.log(classes)

  return (
    <>
      {classes.map(el => {
        return (
          <section className="show-classes" key={el.id}>
            <div className="class-col1">
              <p>{el.date}</p>
            </div>
            <div className="class-col2">
              <p>{el.location}</p>
            </div>
            <div className="class-col3">
              {el.available === true ? (
                <p style={{ color: "green" }}>Available</p>
              ) : (
                <p style={{ color: "var(--pink)" }}>Fully Booked</p>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default GetAllClasses
