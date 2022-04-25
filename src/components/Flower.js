import React from "react"

import purpleCircle from "../images/purple-circle-transparent.png"

const Flower = ({ text, src, alt, flowerType, scale, borderColor }) => {
  const flower = `
  w-full
  h-60
  `

  const container = `
  relative
  text-center
  `

  const centeredContent = `
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  ${text != null && "font-raleway"}
  ${text != null && "font-bond"}
  ${src != null && `scale-[76%]`}
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
