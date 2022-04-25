import React from "react"

import Flower from "./Flower"

const MenuPicture = ({ id, habesha_name, name, price, description }) => {
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
  const mainName =
    typeof habesha_name === "undefined"
      ? `${name}`
      : `${habesha_name} - ${name}`

  const priceSection = typeof price === "undefined" ? "" : `: £${price}`

  return (
    <>
      <h1 className={mainSection}>{`${mainName}${priceSection}`}</h1>
      <p className={descriptionStyling}>{description}</p>
    </>
  )
}

export default MenuPicture
