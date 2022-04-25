import React from "react"

import Flower from "./Flower"

import purpleCircle from "../images/purple-circle-transparent.png"
import orangeCircle from "../images/orange-circle-transparent.png"
import redCircle from "../images/red-circle-transparent.png"
import beyanetu from "../images/beyanetu-1.png"

const IndexMain = () => {
  const bulletPoints = [
    {
      flower: purpleCircle,
      text: "We serve a selection of Habesha food. With a variety of vegeterian and Vegan Options.",
    },
    {
      flower: redCircle,
      text: "Food is served everyday from 8:00 - 22:00.",
    },
    {
      flower: orangeCircle,
      text: "We serve Habesha Beer, Spirits and Wine.",
    },
    {
      src: beyanetu,
      scale: "60%",
    },
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row space-x-6">
        {bulletPoints.map(function (it, idx) {
          return (
            <Flower
              text={it.text}
              src={it.src}
              flowerType={it.flower}
              scale={it.scale}
            />
          )
        })}
      </div>
    </>
  )
}

export default IndexMain
