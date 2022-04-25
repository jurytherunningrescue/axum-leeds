import React from "react"

import NavLink from "../NavLink"

const HeroLinks = () => {
  const heroLinks = `
  absolute
  top-[8px]
  right-[16px]
  hidden
  space-x-3
  md:flex
  `
  return (
    <div id="menu-links" className={heroLinks}>
      <NavLink to="/menu" text="Menu" />
      <NavLink to="/about" text="About" />
      <NavLink to="#contact" text="Contact" />
    </div>
  )
}

export default HeroLinks
