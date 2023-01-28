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
        <span></span>
        <HeroButton
          target="_blank"
          to="https://app.walkup.co/create_booking/vendor/eRU9gAQe-UFgkCTTca8ZBJE4Iqc3-rxnNyADH6b7K7I_restaurant"
          text="Reserve Table"
        />
        <span></span>
        <span className="text-shadow-xl text-3xl font-eagleLake font-bold text-black italic">
          Find us on &nbsp;
          <a
            href="https://w1k.in/ThAhkz5SI"
            className="underline hover:text-5xl hover:text-habeshaOrange visited:text-habeshaGreen"
            target="_blank"
            rel="noreferrer"
          >
            the Dojo App
          </a>
        </span>
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
