import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"
import Header from "../components/header"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <Header />
    <div className="img-about">
      <h1>About Us</h1>
    </div>
    <div className="p1">
      Dr. Mohmed Al-Dabbas Consultant Psychiatrist. He has got the Jordanian
      Board in Psychiatry 1993, MRCPsych pt 1,1997 The Royal College
      Psychiatrists, London. He has got Diploma In Clinical Psychiatry,
      26.05.1997, The Royal College of Physicians of Ireland and Diploma In
      Psychological Medicine from the Royal College of Surgeons/ Dublin. He was
      a director of Psychiatric Unit at Jordanian Royal Medical Services. He was
      the president of the Jordan Association of Psychiatrists in 2008 - 2010.
      He is Examiner in the Jordanian Board of Psychiatry- General Medical
      Council of Jordan, he worked as a psychiatrist in London from 1994 - 1999.
      Dr Al Dabbas is the founder and CEO of Alrawabi Medical Magazine. He has
      got long experience in treating all psychological disorders, he is one of
      the elite doctors in psychiatric field in Jordan and in Middle East.
    </div>
  </Layout>
)

export default About
