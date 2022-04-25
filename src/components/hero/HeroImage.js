import React from "react"

const HeroImage = props => {
  const heroImage = `
  w-full
  ${props.full ? "h-full" : "h-screen"}
  bg-cover
  bg-center
  ${typeof props.bgColor !== "undefined" ? props.bgColor : ""}
  ${props.bgColor && "bg-blend-darken"}
  ${props.image}
  `
  return (
    <section className={heroImage}>
      <div>{props.children}</div>
    </section>
  )
}

export default HeroImage
