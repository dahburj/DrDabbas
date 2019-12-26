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
          <div className="h1New">Dabbas Psychiatry Clinic</div>
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
            <a href="#">Name: Dabbas Psychiatry Clinic</a>
            <a href="#">Address: Ibn Khaldoun St., Amman</a>
            <a href="#">Email: email@example.com</a>
            <a href="#">Phone: 079 715 7590</a>
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
            Professional Background Dr. Mohmed Al-Dabbas Consultant
            Psychiatrist. He has got the Jordanian Board in Psychiatry 1993,
            MRCPsych pt 1,1997 The Roçyal College Psychiatrists, London. He has
            got Diploma In Clinical Psychiatry, 26.05.1997, The Royal College of
            Physicians of Ireland and Diploma In Psychological Medicine from the
            Royal College of Surgeons/ Dublin. He was a director of Psychiatric
            Unit at Jordanian Royal Medical Services. He was the president of
            the Jordan Association of Psychiatrists in 2008 - 2010. He is
            Examiner in the Jordanian Board of Psychiatry- General Medical
            Council of Jordan, he worked as a psychiatrist in London from 1994 -
            1999. Dr Al Dabbas is the founder and CEO of Alrawabi Medical
            Magazine. He has got long experience in treating all psychological
            disorders, he is one of the elite doctors in psychiatric field in
            Jordan and in the Middle East.
          </div>
        </div>
      </div>
    </body>
  </Layout>
)

export default IndexPage
