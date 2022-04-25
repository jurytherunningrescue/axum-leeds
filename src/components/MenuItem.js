import React from "react"

import Flower from "./Flower"

const MenuItem = props => {
  const mainSection = `
  font-eagleLake
  font-bold
  text-2xl
  ${typeof props.bgColor !== "undefined" ? props.bgColor : "bg-habeshaRed/30"}
  `

  const descriptionStyling = `
  font-raleway
  text-lg
  text-center
  align-middle
  `

  const image = `
  float-left
  rounded-full
  mr-2
  my-2
  `

  const mainName =
    typeof habesha_name === "undefined"
      ? `${props.name}`
      : `${props.habesha_name} - ${props.name}`

  const priceSection =
    typeof props.price === "undefined" ? "" : `: £${props.price}`

  if (typeof props.src !== "undefined") {
    return (
      <section
        id="menu-item"
        className="w-screen text-center md:w-[600px] md:text-left md:ml-8"
      >
        <h1 className={mainSection}>{`${mainName}${priceSection}`}</h1>
        <article>
          <div className={image}>
            <Flower
              src={props.src}
              alt={props.alt}
              flowerType={props.flowerType}
              scale={props.scale}
              borderColor={props.borderColor}
            />
          </div>
          <p className={descriptionStyling}>{props.description}</p>
        </article>
      </section>
    )
  } else {
    return (
      <section>
        <h1 className={mainSection}>{`${mainName}${priceSection}`}</h1>
        <article>
          <p className={descriptionStyling}>{props.description}</p>
        </article>
      </section>
    )
  }
}

export default MenuItem
