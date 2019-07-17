import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      {new Date().getFullYear()}, Built with
      {` `}
      <Link to="https://www.gatsbyjs.org"> Gatsby </Link>
    </footer>
  )
}

export default Footer
