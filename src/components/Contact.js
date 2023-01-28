import React from "react"

import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram"
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook"
import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone"
import { RiMapPinFill } from "@react-icons/all-files/ri/RiMapPinFill"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

// import "./Contact.css"

const Contact = () => {
  const contactList = `
  w-[700px]
  border-2
  border-habeshaRed
  text-habeshaOrange
  shadow-lg
  drop-shadow-2xl
  shadow-habeshaRed
  backdrop-blur-xl
  bg-habeshaPurple/30
  font-workSans
  `

  const ulDropDown = `
  text-left
  text-xl
  font-bold
  p-0
  mx-auto
  my-0
  flex
  flex-col
  md:text-2xl
  `

  const liDropDown = `
  py-[8px]
  px-[12px]
  flex
  itemx-center
  text-center
  hover:bg-habeshaPurple
  `

  const iconResize = `
  h-[36px]
  `

  const tel = "0113 243 2336"
  const email = "axumleeds@gmail.com"
  const gmapLink =
    "https://maps.google.co.uk/?daddr=Danwood+House,+34+Regent+St,+Leeds+LS2+7QN"
  const fb = "https://www.facebook.com/profile.php?id=100083938080232"
  const insta = "https://www.instagram.com/axumleeds/?hl=en"
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div id="contact" className={contactList}>
        <ul className={ulDropDown}>
          <li className={liDropDown}>
            <GiSmartphone className={iconResize} />
            <a href={`tel:${tel}`}>: {tel}</a>
          </li>
          <li className={liDropDown}>
            <RiMapPinFill className={iconResize} />
            <a href={gmapLink} target="_blank" rel="noreferrer">
              : 34 Regent Street, LS2 7QN, Leeds LS7 1DL
            </a>
          </li>
          <li className={liDropDown}>
            <AiOutlineMail className={iconResize} />
            <a href={`mailto:${email}`}>: {email}</a>
          </li>
          <li
            className={`${liDropDown} self-center mt-4 flex space-x-8 border border-habeshaRed hover:bg-inherit`}
          >
            <a href={insta} target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
            <a href={fb} target="_blank" rel="noreferrer">
              <FiFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
