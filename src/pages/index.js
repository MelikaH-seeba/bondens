import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Welcome from "../components/welcome_section"
import Images1 from  "../components/images1"
import About from "../components/about"
import Partners from "../components/partners"
import Footer from "../components/footer"
import Instagram from "../components/instagram"
import OneImage from "../components/one_image"
import Products from "../components/products"
import SpecialHours from "../components/special_hours"
import Loadable from "react-loadable"
import MobileHeader from "../components/mobile_header"

const LoadableCallendar = Loadable({
  loader: () => import("../components/calendar"),
  loading() {
    return <div className="is-hidden">Loading...</div>
  },
})

export default class IndexPage extends React.Component {
  render() {
    return (
  <Layout>
    <SEO title description lang="se"/>
    <MobileHeader/>
    <Welcome/>
    <Images1/>
    <About/>
    <Products/>
    <OneImage/>
    <Partners/>
    <LoadableCallendar />
    <Instagram/>
    <SpecialHours/>
    <Footer/>
    </Layout>
    )
  }
}

