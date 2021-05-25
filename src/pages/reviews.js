import React from "react"
import Layout from "../components/Layout"

const reviews = () => {
  const myStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Layout>
      <div style={myStyle}>
        <h1 style={{ textTransform: "capitalize" }}>
          Ooops, I am still working on this page... come back later
        </h1>
      </div>
    </Layout>
  )
}

export default reviews
