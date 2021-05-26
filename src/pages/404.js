import React from "react"
import Layout from "../components/Layout"

const error = () => {
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
          Ooops, No page found. 404 error.
        </h1>
      </div>
    </Layout>
  )
}

export default error
