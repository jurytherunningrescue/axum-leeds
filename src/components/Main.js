import React from "react"
import verticalPattern from "../images/habesha-pattern-vertical.png"

const Main = ({ children }) => {
  const body = `
  bg-menuBackground
  `

  const verticalImage = `
  w-16
  `

  return (
    <>
      <main className={body}>
        <div className="flex justify-between items-center items-stretch">
          <img
            src={verticalPattern}
            className={verticalImage}
            alt="Vertical Pattern"
          />
          <div className="self-center">{children}</div>
          <img
            src={verticalPattern}
            className={verticalImage}
            alt="Vertical Pattern"
          />
        </div>
      </main>
    </>
  )
}

export default Main
