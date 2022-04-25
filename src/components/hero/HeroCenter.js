import React from "react"

const HeroCenter = ({ children }) => {
  const heroCenter = `
  absolute
  top-1/2
  left-1/2
  transform
  -translate-y-1/2
  -translate-x-1/2
  flex
  flex-col
  text-center
  space-y-6
  `

  return (
    <>
      <div className={heroCenter}>{children}</div>
    </>
  )
}

export default HeroCenter
