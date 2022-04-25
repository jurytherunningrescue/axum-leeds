import React from "react"

import Layout from "../components/Layout"
import Contact from "../components/Contact"

const ContactPage = () => {
  return (
    <>
      <Layout
        title=""
        image="bg-axumObelisk"
        bgColor="bg-emerald-400"
        innerComponent={<Contact />}
        full
      ></Layout>
    </>
  )
}

export default ContactPage
