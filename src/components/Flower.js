import React from "react"

import purpleCircle from "../images/purple-circle-transparent.png"
import "./Flower.css"

const Flower = ({ text, src, alt, flowerType, scale, borderColor }) => {
  const flower = `
  w-screen
  h-96
  md:h-60
  md:w-auto
  `

  const container = `
  relative
  text-center
  `

  const centeredContent = `
  centered-flower
  absolute
  top-1/2
  left-1/2
  w-80
  ${text != null && "font-raleway"}
  ${text != null && "font-bond"}
  ${src != null && `rounded-full`}
  ${src != null && `border-[4px] md:border-[5px]`}
  ${
    src != null &&
    `${typeof borderColor !== "undefined" ? borderColor : "border-habeshaRed"}`
  }
  object-cover
  `

  const flowerImage =
    typeof flowerType === "undefined" ? purpleCircle : flowerType
  if (text != null) {
    return (
      <div className={container}>
        <img src={flowerImage} className={flower} alt="Flower" />
        <p className={centeredContent}>{text}</p>
      </div>
    )
  } else {
    return (
      <div className={container}>
        <img src={flowerImage} className={flower} alt="Flower" />
        <img
          src={src}
          className={centeredContent}
          alt={alt != null ? alt : ""}
        />
      </div>
    )
  }
}

export default Flower
