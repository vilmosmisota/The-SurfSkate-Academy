import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const reviews = () => {
  return (
    <Layout>
      <Seo title="Review" description="Review me on Trustpilot" />
      <main className="contact-page">
        <h1>
          To support my business and spread the Surfskate word, please review me
          on Trustpilot. Click to the "REVIEW" below.
        </h1>
        <p>
          hope you enjoy your time at The Surskate Academy and please let me
          know how your surfing sessions go afterwards by pinging me a DM, email
          or dropping me a comment on Instagram
        </p>

        <a
          href="https://uk.trustpilot.com/evaluate/thesurfskateacademy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <p>REVIEW</p>
          </div>
        </a>
      </main>
    </Layout>
  )
}

export default reviews
