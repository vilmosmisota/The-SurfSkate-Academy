import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import HomeFeed from "../components/HomeFeed"

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeFeed />
    </Layout>
  )
}
