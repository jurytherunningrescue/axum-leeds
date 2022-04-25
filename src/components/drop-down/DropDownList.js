import React from "react"

import NavLink from "../NavLink"

import "./DropDownList.css"

const DropDownList = ({ isHidden }) => {
  const dropDownList = `
  absolute
  top-0
  left-0
  ${isHidden ? "slide-out" : "slide-in"}
  w-40
  z-[2]
  border-2
  border-habeshaRed
  text-center
  pt-12
  shadow-lg
  drop-shadow-2xl
  shadow-habeshaRed
  backdrop-blur-lg
  bg-habeshaPurple/60
  `

  const ulDropDown = `
  list-none
  p-0
  m-0
  `

  const liDropDown = `
  py-[8px]
  px-[12px]
  hover:bg-habeshaRed
  `
  return (
    <div id="drop-down" className={dropDownList}>
      <ul className={ulDropDown}>
        <li className={liDropDown}>
          <NavLink to="/" text="Home" />
        </li>
        <li className={liDropDown}>
          <NavLink to="/menu" text="Menu" />
        </li>
        <li className={liDropDown}>
          <NavLink to="/contact" text="Contact" />
        </li>
      </ul>
    </div>
  )
}

export default DropDownList
