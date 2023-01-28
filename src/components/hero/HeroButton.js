import React from "react"
import { Link } from "gatsby"

const HeroButton = props => {
  const heroButton = `
  p-3
  px-6
  pt-2
  font-eagleLake
  font-bold
  text-habeshaOrange
  text-lg
  rounded-full
  baseline
  bg-habeshaRed
  hover:bg-habeshaPurple
  md:text-3xl
  `

  return (
    <Link to={props.to} target={props.target}>
      <span className={heroButton}>{props.text} </span>
    </Link>
  )
}

export default HeroButton
