import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import userInstagram from "user-instagram"
import instagram from "../images/instagram2.svg"
import InstaButton from "../images/logo-instagram.svg"
export default class Instagram extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          dataInsta: [],
        }
      }
        componentDidMount(){
            let instaData = userInstagram("bondensvasteras")
            instaData.then(userData => {
            this.setState({ dataInsta: userData }, () => {
                //console.log(this.state)
            })
            })
        }
      
  render() {
    let chars = this.state.dataInsta.posts

    return (
      <section id="section_10" class="section">
      <div class="container">
        <div class="columns is-gapless is-mobile">
        {chars && chars.length > 0
                ? chars.slice(0, 4).map(item => {
                    return (
                      <div
                        key={item.id}
                        className="column"
                      >
                          <figure className="image is-1by1">
                            <img src={item.imageUrl} alt={item.caption} />
                          </figure>
                        
                      </div>
                    )
                  })
                : "Loading..."}
          
          
        </div>
        <a href="https://www.instagram.com/bondensvasteras/" class="btn_instagram" target="_blank"> 
          <img src={InstaButton} alt="Follow us on Instagram"/>
          <span>Följ oss på Instagram</span>
        </a>
      </div>
    </section>
     
    )
  }
}





