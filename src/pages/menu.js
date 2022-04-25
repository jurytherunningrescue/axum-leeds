import React from "react"

import Layout from "../components/Layout"
import MenuSection from "../components/MenuSection"
import MenuItem from "../components/MenuItem"

import meatDishes from "../data/meat-dishes"
import breakfastDishes from "../data/breakfast"
import veggieDishes from "../data/vegeterian"

const MenuPage = () => {
  return (
    <>
      <Layout
        title="Menu"
        image="bg-mahberawi"
        bgColor="bg-green-200"
        bodyColor="bg-menuBackground"
      >
        <MenuSection title="Breakfast" subtitle="Served until 1:00PM" mb>
          {breakfastDishes.map(function (it, idx) {
            return (
              <MenuItem
                id={idx}
                borderColor="border-habeshaOrange"
                bgColor="bg-flowerOrange/60"
                {...it}
              />
            )
          })}
        </MenuSection>
        <MenuSection title="Meat Dishes" mb>
          {meatDishes.map(function (it, idx) {
            return <MenuItem id={idx} {...it} />
          })}
        </MenuSection>
        <MenuSection title="Vegeterian Dishes">
          {veggieDishes.map(function (it, idx) {
            return (
              <MenuItem
                id={idx}
                borderColor="border-habeshaPurple"
                bgColor="bg-flowerPurple/60"
                {...it}
              />
            )
          })}
        </MenuSection>
      </Layout>
    </>
  )
}

export default MenuPage
