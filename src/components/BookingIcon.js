import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const BookingIcon = () => {
  return (
    <div className="shaka-logo-container">
      <StaticImage
        src="../assets/svg/kisspng-shaka-sign-stock-photography-drawing-shaka-5acd24ab731478.7358209215233937074714.png"
        alt="shaka logo"
        width={50}
        layout="constrained"
        quality={95}
        placeholder="none"
        className="shaka-logo"
      />
    </div>
  )
}

export default BookingIcon
