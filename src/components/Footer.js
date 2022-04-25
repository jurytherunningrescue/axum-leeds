import React from "react"

import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram"
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook"

const Footer = () => {
  const footerStyle = `
  bg-footerBackground
  border-top
  text-gray-200
  `

  const iconStyle = `
  h-4
  w-auto
  `

  const footerContainer = `
  flex
  justify-between
  items-center
  px-2
  `

  return (
    <>
      <footer className={footerStyle}>
        <div className={footerContainer}>
          <div id="text-contact">
            <ul>
              <li> Contact Info </li>
              <li> Contact Info </li>
              <li> Contact Info </li>
            </ul>
          </div>
          <div id="icon-contact" className="flex flex-col">
            <FiInstagram className={iconStyle} />
            <FiFacebook className={iconStyle} />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
