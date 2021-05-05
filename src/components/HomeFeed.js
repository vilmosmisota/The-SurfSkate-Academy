import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/homeFeed.css"

const HomeFeed = () => {
  return (
    <main className="home-feed-container">
      <section className="first-section-container">
        <div className="message-container">
          <h1>AT THE SURFSKATE ACADEMY </h1>
          <p className="home-paragraph-section">
            You get a training method that is based on the repetition and
            automation of all the movements necessary for good progression in
            your surfing. A session of surfskate training with a surf coach is
            equivalent to dozens of hours of surfing in the water.
          </p>
        </div>
        <div className="first-section-img-container">
          <StaticImage
            src="../assets/images/statement_img.jpg"
            alt="surfskating in Edinburgh"
            width={688}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="home-feed-img"
          />
        </div>
      </section>
      <section className="second-section-container">
        <div className="message-container">
          <h1>FOR BEGINNERS ALL THE WAY UP TO ADVANCED </h1>
          <p className="home-paragraph-section">
            It doesn't matter if you are a beginner, intermediate or advanced
            surfer, surfskate training is ideal for correcting bad habits,
            perfecting your technique, understanding the biomechanics of your
            body, increasing your confidence, improving your balance and opening
            your mind to be able to read the waves in different ways.
          </p>
        </div>
        <div className="second-section-img-container">
          <StaticImage
            src="../assets/images/statement_img2.jpg"
            alt="on land surf training"
            width={688}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="home-feed-img"
          />
        </div>
      </section>
      <section className="third-section-container">
        <div className="message-container">
          <h1>HOW MUCH HAS YOUR SURFING PROGRESSED IN THE LAST FEW YEARS?</h1>
          <p className="home-paragraph-section">
            Training on land is key to improving your surfing. You can spend
            hours in the water repeating the same mistakes without realizing it,
            creating bad habits and frustration without any real progress. This
            training modality corrects and builds your muscle memory so that you
            can then apply your new movements next time in the water.
          </p>
        </div>
        <div className="third-section-img-container">
          <StaticImage
            src="../assets/images/statement_img3.jpg"
            alt="surfing in Scotland"
            width={688}
            layout="constrained"
            quality={95}
            placeholder="none"
            className="home-feed-img"
          />
        </div>
      </section>
    </main>
  )
}

export default HomeFeed
