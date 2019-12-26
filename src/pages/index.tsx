import React from "react"
import { Link } from "gatsby"
import "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

import "./index.css"
import Cards from "./agents"
import "./footer.css"
import Slider from "./slider"
import Team from "./team"
import {
  CardContent,
  Typography,
  CardActionArea,
  Card,
  CardMedia,
} from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <body>
      <Header />
      <div id="scroll">
        <div className="firstimg">
          <div className="h1New">Modern Day Clinic</div>
          <div className="contact-head"></div>
        </div>
      </div>
      <div className="grid">
        <div className="secondimg">
          <span>Services</span>
          <div className="cat">
            <a href="#">ADHD</a>
            <a href="#">Bipolar</a>
            <a href="#">Depression</a>
            <a href="#">OCD</a>
            <a href="#">Panic Attack</a>
            <a href="#">Anxiety</a>
            <a href="#">Insomnia</a>
            <a href="#">Post Tramiatic Stress Disorder (PTSD)</a>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="secondimg">
          <span>Contact Us</span>
          <div className="cat">
            <a href="#">Name: Modern Day Clinic</a>
            <a href="#">Address: 1234 California, LA</a>
            <a href="#">Email: email@example.com</a>
            <a href="#">Phone: (312)-232-2334</a>
          </div>
        </div>
      </div>
      <Slider />
      <div className="Agents">
        <h1>Videos</h1>
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="Team">
        <h1>Our Team</h1>
        <Team />
        <Team />
        <Team />
        <Team />
      </div>
      <div className="fourthimg"></div>
      <div className="thirdimg">
        <span>Testimonials</span>
        <div className="about-us">
          <div className="pNew">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat." <strong>~ Amanda</strong>
          </div>
        </div>
      </div>
    </body>
  </Layout>
)

export default IndexPage
