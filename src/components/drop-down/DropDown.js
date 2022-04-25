import React, { createContext, useState } from "react"

import DropDownList from "./DropDownList"
import HamburgerMenu from "../MenuBurger"

export const BurgerMenuContext = createContext()

const DropDown = () => {
  const container = `
  relative
  inline-block
  `

  const [isModeOpen, setModeOpen] = useState(false)

  return (
    <BurgerMenuContext.Provider value={[isModeOpen, setModeOpen]}>
      <div className={container}>
        <HamburgerMenu />
        <DropDownList isHidden={!isModeOpen} />
      </div>
    </BurgerMenuContext.Provider>
  )
}

export default DropDown
