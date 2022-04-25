import shiroImage from "../images/menu-items/shiro-1.jpeg"
import beyanetuImage from "../images/menu-items/beyanetu-1.jpeg"
import injeraImage from "../images/menu-items/injera-fitfit-1.jpeg"

import purpleFlower from "../images/purple-circle-transparent.png"

const veggieDishes = [
  {
    name: "Shiro",
    description: `
Roasted ground chickpeas stewed with suateed onions,
fresh green chilli and mild traditional spices.
      `,
    src: shiroImage,
    alt: "Shiro Picture",
  },
  {
    name: "Injera FitFit",
    description: `
Injera mixed and served with green chillies and traditional spices.
      `,
    src: injeraImage,
    alt: "Injera FitFit Picture",
    flowerType: purpleFlower,
  },
  {
    name: "Vegan Combo",
    description: `
A combination of 3 different lentil stews, cooked
vegetables, spinach and salad.
Each flavoured with a mixture of our traditional spices
      `,
    src: beyanetuImage,
    alt: "Beyanetu Picture",
    flowerType: purpleFlower,
  },
]

export default veggieDishes
