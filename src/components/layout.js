/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <main>{children}</main>
      <footer>
        <div className="footer-flex">
          <div className="flex container">
            <div className="footer-about">
              <h4><strong>About Us</strong></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>

            <div className="footer-quick-links">
              <h4><strong>Quick Links</strong></h4>
              <div>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <div className="media-links">
              <h4 className="follow-us"><strong>Follow Us</strong></h4>
              <div>
                <SocialIcon network="facebook" />
                <SocialIcon network="twitter" />
                <SocialIcon url="http://linkedin.com/in/jaketrent" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      © {new Date().getFullYear()}, All Rights Reserved. Modern Day Clinic
          {` `}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
