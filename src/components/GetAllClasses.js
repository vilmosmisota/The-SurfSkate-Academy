import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/styles/getAllClasses.css"
import BookingIcon from "./BookingIcon"

const query = graphql`
  {
    allContentfulUpcomingClasses {
      nodes {
        Level
        date(formatString: "DD MMM hh:mm")
        id
        location
        fullyBooked
      }
    }
  }
`

const GetAllClasses = () => {
  const data = useStaticQuery(query)
  const classes = data.allContentfulUpcomingClasses.nodes

  console.log(classes)

  return (
    <>
      {classes.map(el => {
        return (
          <section className="show-classes" key={el.id}>
            <div className="class-col1">
              <p>{el.Level}</p>
            </div>
            <div className="class-col2">
              <p>{el.date}</p>
            </div>
            <div className="class-col3">
              <p>{el.location}</p>
            </div>
            <div className="class-col4">
              {el.fullyBooked === false ? <BookingIcon /> : <p>Fully Booked</p>}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default GetAllClasses
