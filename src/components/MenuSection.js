import React from "react"

import "./MenuSection.css"

const MenuSection = ({ children, title, subtitle, mb }) => {
  const body = `
  bg-menuBackground
  flex
  ${mb && "mb-32"}
  md:h-screen
  `

  const subStyle = `
  font-raleway
  italic
  text-md
  font-light
  md:-mt-2


  `

  return (
    <>
      <section className={body}>
        <div className="flex flex-col items-center text-center">
          <h1 className="uppercase text-5xl font-bold mb-2">{title}</h1>
          {typeof subtitle !== "undefined" && (
            <h3 className={subStyle}>{subtitle}</h3>
          )}
          <div className="flex flex-wrap max-w-12 justify-center items-center md:space-x-4">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuSection
