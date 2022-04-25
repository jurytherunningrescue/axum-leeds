import React from "react"

import Flower from "./Flower"

const MenuItem = props => {
  const mainSection = `
  font-eagleLake
  font-bold
  text-2xl
  bg-habeshaRed/30
  `

  const descriptionStyling = `
  font-raleway
  text-lg
  `

  const image = `
  float-left
  rounded-full
  `

  const mainName =
    typeof habesha_name === "undefined"
      ? `${props.name}`
      : `${props.habesha_name} - ${props.name}`

  const priceSection =
    typeof props.price === "undefined" ? "" : `: £${props.price}`

  if (typeof props.src !== "undefined") {
    return (
      <section>
        <h1 className={mainSection}>{`${mainName}${priceSection}`}</h1>
        <article>
          <div className={image}>
            <Flower
              src={props.src}
              alt={props.alt}
              flowerType={props.flowerType}
              scale={props.scale}
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
