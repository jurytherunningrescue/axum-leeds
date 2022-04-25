import React from "react"

import Flower from "./Flower"
import MenuText from "./MenuText"

const MenuItem = props => {
  const menuItem = `
  flex
  flex-row
  `

  return (
    <div className={menuItem}>
      <MenuText
        id={props.id}
        habesha_name={props.habesha_name}
        name={props.name}
        price={props.price}
        description={props.description}
      />
      <Flower
        src={props.src}
        alt={props.alt}
        flowerType={props.flowerType}
        scale={props.scale}
      />
    </div>
  )
}

export default MenuItem
