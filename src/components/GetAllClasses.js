import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "../assets/styles/getAllClasses.css"
import BookingIcon from "./BookingIcon"

const query = graphql`
  {
    allContentfulClasses(sort: { fields: date }) {
      nodes {
        location
        level
        id
        fullyBooked
        date(formatString: "DD MMM, h:mma")
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
              {el.fullyBooked === false ? (
                <p>Available</p>
              ) : (
                <p>Fully Booked</p>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default GetAllClasses
