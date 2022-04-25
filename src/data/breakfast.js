import fuulImage from "../images/menu-items/fuul-1.jpeg"
import kichaImage from "../images/menu-items/kicha-fitfit-1.jpeg"
import dulotImage from "../images/menu-items/dulot-1.jpeg"
import kwantaImage from "../images/menu-items/kwanta-fitfit-3.jpeg"
import scrambledImage from "../images/menu-items/scrambled-eggs-1.jpeg"

import orangeFlower from "../images/orange-circle-transparent.png"

const breakfastDishes = [
  {
    name: "Fuul",
    description: `
Fava beans with onions, olive oil and chilli,
served with fresh bread.
      `,
    src: fuulImage,
    alt: "Fuul Picture",
    flowerType: orangeFlower,
  },
  {
    name: "Kicha FitFit",
    description: `
Small pieces of flatbread cooked with traditional
chilli powder and special spiced butter
      `,
    src: kichaImage,
    alt: "Kicha FitFit Picture",
    flowerType: orangeFlower,
  },
  {
    name: "Dulot",
    description: `
Diced pan-fried tripe and mince beef
`,
    src: dulotImage,
    alt: "Dulot Picture",
    flowerType: orangeFlower,
  },
  {
    name: "Kwanta FitFit",
    description: `
Smoke-dried shreds of beef served with fresh
green chillies mixed with injera.
`,
    src: kwantaImage,
    alt: "Kwanta FitFit Picture",
    flowerType: orangeFlower,
  },
  {
    name: "Scrambled Eggs",
    description: `
Scrambled eggs fried with onions and fresh tomatoes.
`,
    src: scrambledImage,
    alt: "Scrambled Eggs Picture",
    flowerType: orangeFlower,
  },
]

export default breakfastDishes
