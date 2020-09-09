import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import Clock from "../images/clock.svg"
import Location from "../images/location.svg"
export default class WelcomeSection extends React.Component {
  state = {
    description : "",
    name:"",
    images:"",
    loading:true,
}
componentDidMount(){
    axios.get(`https://login.findie.se/api/profiles/256/`).then(res => {
        const description = res.data.data.description;
        const name = res.data.data.name;
        this.setState({ description:description, name:name }, function() {})
      });
      axios.get('https://login.findie.se/api/profiles/247/galleries').then(res => {   
            const images = res.data.data;
            this.setState({images:images, loading:false},function() {
                console.log(this.state.images[0].images[0].medium);        
            })
          }); 

}
  render() {   
    return (
      <section id="section__1" class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="__inner">
              <h2 class="subtitle">Bondens Västerås</h2>
              <p class="title">Välkommen till oss!</p>
              <p class="content">
              Ekologiskt, hållbart, närproducerat för en bättre framtid för alla.
              </p>
              <a href="#section_3" class="btn__primary"><span>Läs mer om oss</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

