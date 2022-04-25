import React from "react"

const HeroText = ({ text }) => {
  const heroText = `
  font-eagleLake
  font-bold
  text-5xl
  text-stone-500
  text-habeshaPurple
  thickOutlined
  md:text-7xl
  `

  return (
    <>
      <h1 className={heroText}>{text}</h1>
    </>
  )
}

export default HeroText
