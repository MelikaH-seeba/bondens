import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import Logo from "../images/logo.svg"


export default class OneImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: true,
        images: "",
    }
  }
componentDidMount(){
    this.setState({loading:true})
    axios.get('https://login.findie.se/api/profiles/243/galleries').then(res => {
       const images = res.data.data;
        this.setState({loading:false, images:images},function() {
          console.log(this.state.images)
        })
      }); 
}
  render() {
    return (
      <>
      {this.state.loading
      ? <p>Loading</p>
      :      <section id="bg__image" class="section" style={{backgroundImage:`url(${this.state.images[2].images[0].fullhd})`}}></section>
    }
</>
    )
  }
}





