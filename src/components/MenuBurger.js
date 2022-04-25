import React, { useContext } from "react"

import "./MenuBurger.css"
import { BurgerMenuContext } from "./drop-down"

const MenuBurger = () => {
  const [isModeOpen, setModeOpen] = useContext(BurgerMenuContext)

  return (
    <div
      className={`menu-btn ${isModeOpen ? "open" : ""}`}
      onClick={() => setModeOpen(!isModeOpen)}
      onKeyDown={() => setModeOpen(!isModeOpen)}
      aria-hidden="true"
    >
      <div className="menu-btn__burger"></div>
    </div>
  )
}

// class MenuBurger extends Component() {
// constructor(props) {
// console.log(props)
// super(props)

// this.addActiveClass = this.addActiveClass.bind(this)
// this.state = {
// open: false,
// }
// }

// toggleClass = event => {
// const currentState = this.state.open
// this.setState({ open: !currentState })
// }

// render() {
// return (
// <div className="menu-btn">
// <div
// aria-hidden="true"
// className={
// this.state.open ? "menu-btn__burger open" : "menu-btn__burger"
// }
// onClick={this.toggleClass}
// onKeyDown={this.toggleClass}
// ></div>
// </div>
// )
// }
// }

export default MenuBurger
