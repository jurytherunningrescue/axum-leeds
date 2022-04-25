import tibsImage from "../images/menu-items/tibsi.jpeg"
import kitfoImage from "../images/menu-items/kitfo.jpeg"
import awazeTibsImage from "../images/menu-items/awaze-tibsi.jpeg"
import derekTibsImage from "../images/menu-items/derek-tibsi.jpeg"
import bozenaImage from "../images/menu-items/bozena-shiro.jpeg"
import dulotImage from "../images/menu-items/dulot.jpeg"
import kwantaImage from "../images/menu-items/kwanta-fitfit-2.jpeg"
import dorhoImage from "../images/menu-items/dorho-1.jpeg"
import tihloImage from "../images/menu-items/tihlo-1.jpeg"

import redFlower from "../images/red-circle-transparent.png"

const meatDishes = [
  {
    name: "Tibsi",
    description: `
Lamb cubes sauteed in ghee with onions, rosemary and green chilli.

Served with salad and spicy Awaze sauce on the side.
      `,
    src: tibsImage,
    alt: "Tibs Picture",
    flowerType: redFlower,
  },
  {
    name: "Kitfo",
    description: `
Raw lean steak tartar (can be cooked to your choice.)
      `,
    src: kitfoImage,
    alt: "Kitfo Picture",
    flowerType: redFlower,
  },
  {
    name: "Awaze Tibsi",
    description: `
Lamb cubes sauteed in ghee with onions, rosemary and green chilli.

Cooked in spicy Awaze sauce.`,
    src: awazeTibsImage,
    alt: "Awaze Tibs Picture",
    flowerType: redFlower,
  },
  {
    name: "Derek Tibsi",
    description: `
Lamb cubes pan-fried with onions spices, olive oil
and herbs, served on a charchoal heated clay pan.

Served with spicy Awaze sauce on the side.
`,
    src: derekTibsImage,
    alt: "Derek Tibs Picture",
    flowerType: redFlower,
  },
  {
    name: "Bozena Shiro",
    description: `
Finely-ground chickpeas cooked in oil mixed with lamb cubes.
`,
    src: bozenaImage,
    alt: "Bozen Shiro Picture",
    flowerType: redFlower,
  },
  {
    name: "Dulot",
    description: `
Diced pan-fried tripe and minced meat.
`,
    src: dulotImage,
    alt: "Dulot Picture",
    flowerType: redFlower,
  },
  {
    name: "Kwanta FitFit",
    description: `
Smoke-dried shreds of beef served with fresh green chillies and mixed
with injera.
`,
    src: kwantaImage,
    alt: "Kwanta FitFit Picture",
    flowerType: redFlower,
  },
  {
    name: "Dorho",
    description: `
(Available pre-ordered or on Sundays).

Chicken stew slowly cooked in a rich flavour of herbs, spices and chilli.
`,
    src: dorhoImage,
    alt: "Dorho Picture",
    flowerType: redFlower,
  },
  {
    name: "Tihlo",
    description: `
(Available pre-ordered only).

A dish from the historical Agame province in Tigray
tha consists of barley dough balls covered with meat
and berbere based sauce often served on special occasions.
`,
    src: tihloImage,
    alt: "Tihlo Picture",
    flowerType: redFlower,
  },
]

export default meatDishes
