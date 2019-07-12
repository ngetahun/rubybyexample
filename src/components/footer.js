import React from 'react'
import {PropTypes} from 'prop-types'
import {Link} from 'gatsby'

const Footer = () => {
    return(
    <footer>
        {new Date().getFullYear()}, Built with
        {` `}
        <Link to='https://www.gatsbyjs.org'> Gatsby </Link>
        </footer>
    )
}

export default Footer
