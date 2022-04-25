import React from "react"
import PropTypes from "prop-types"

import { HeroImage, HeroButton, HeroText, HeroCenter } from "./hero"
import DropDown from "./drop-down"

import "./Layout.css"

const Layout = ({
  children,
  title,
  image,
  bgColor,
  bodyColor,
  innerComponent,
  full,
}) => {
  let centralText

  if (title != null) {
    centralText = <HeroText text={title} />
  } else {
    centralText = (
      <>
        <HeroText text="Axum" />
        <HeroText text="Bar & Restaurant" />
        <HeroButton to="/menu" text="Menu" />
      </>
    )
  }

  const heroImage = typeof image === "undefined" ? "bg-jebena" : image

  const centralRegion =
    typeof innerComponent === "undefined" ? (
      <HeroCenter>{centralText}</HeroCenter>
    ) : (
      innerComponent
    )

  return (
    <>
      <HeroImage image={heroImage} bgColor={bgColor} full={full}>
        <DropDown />
        {centralRegion}
      </HeroImage>
      {typeof children !== "undefined" && (
        <main className={bodyColor}>{children}</main>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
