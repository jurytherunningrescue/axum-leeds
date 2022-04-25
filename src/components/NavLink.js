import React from "react"
import { Link } from "gatsby"

const NavLink = props => {
  const navLink = `
  decoration-habeshaPurple
  decoration-4
  text-habeshaOrange
  text-opacity-90
  font-raleway
  font-bold
  text-1xl
  decoration-3
  text-lg
  md:text-2xl
  `

  return (
    <Link to={props.to} className={navLink}>
      {props.text}
    </Link>
  )
}

export default NavLink
