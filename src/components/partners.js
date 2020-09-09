import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import Arrow from "../images/google-arrow.svg"
import Partner from "../images/partner_1.png"
export default class Partners extends React.Component {
  state = {
    images : [],
    loading:true,
}
componentDidMount(){
    axios.get(`https://login.findie.se/api/profiles/243/galleries`).then(res => {
        const images = res.data.data;
        this.setState({ loading:false, images:images }, function() {
          console.log(this.state.images)
        })
      });
}
  render() {
    return (
       <section className="section" id="section_6">
         <div class="container">
        <div class="columns">
          <div class="column">
            <h1 className="subtitle">Samarbetspartners</h1>
            <h2 class="title">Våra samarbetspartners</h2>
            <p>På Bondens Västerås så vill vi bidra till en bättre framtid för alla. Som ett led i det arbetet så vill vi främja ett ekologiskt och närproducerat jordbruk. Småskalighet och närproducerat bidrar till ett levande jordbruk och en hållbar tillverkning av livsmedel som är bra för vår miljö, bra för bonden och bra för dig som konsument, en bättre framtid för oss alla helt enkelt. Av denna anledning så har vi valt att samarbeta med alla mindre och närproducerande aktörer i Västmanland men också från andra områden i Sverige. På det sättet så hoppas vi främja och bevara vår unika matkultur. Välkommen att handla våra närproducerade produkter och bidra till en bättre framtid</p>
          </div>
        </div>
        <div class="columns is-multiline is-variable is-8 is-mobile">
          {this.state.loading
          ? <p>Loading...</p>
        :<>
        {this.state.images[3].images.map(image=>(
           <div class="column is-2-tablet is-3-mobile">
           <figure class="image is-4by3">
             <img src={image.image} alt="Partner 1"/>
           </figure>
         </div>
        ))}
        </>
        }
        </div>
      </div>
       </section>
    )
  }
}





