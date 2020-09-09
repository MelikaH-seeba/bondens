import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Phone from "../images/phone-icon.svg"
import Facebook from "../images/facebook-icon.svg"
import Instagram from "../images/logo-instagram.svg"
import Logo from "../images/logo-footer.svg"
import Findie from "../images/findie-logo.svg"
export default class FooterSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
          opening_hours: [],
          active:false,
          phone:"",
          email:"",
          address:"",
          instagram:"",
          facebook:"",
          special_opening_hours:[],
        }
      }
    componentDidMount(){
        this.setState({loading:true})
        axios.get('https://login.findie.se/api/profiles/243/').then(res => {
            const opening_hours = res.data.data.working_time;
            const phone = res.data.data.phone;
            const email = res.data.data.email;
            const address = res.data.data.address;
            const instagram = res.data.data.instagram;
            const facebook = res.data.data.facebook;
            const special_opening_hours = res.data.data.custom_working_time;
            this.setState({loading:false, opening_hours:opening_hours, email:email, phone:phone, address:address, instagram:instagram, facebook:facebook, special_opening_hours:special_opening_hours},function() {
            })
          }); 
    }
  render() {
    return (
        <footer id="footer_section" class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column is-10 is-offset-1">
              <div class="columns">
                <div class="column is-4">
                  <p class="__headline">ADRESS</p>
                  <a href="https://www.google.com/maps/place/Bondens+V%C3%A4ster%C3%A5s/@59.5918824,16.513953,15z/data=!4m2!3m1!1s0x0:0xd3cd163ec2d91e87?sa=X&ved=2ahUKEwihrpvsv6HrAhVql4sKHfO3AoEQ_BIwFXoECBgQCA" target="_blank">
                    <p class="content">{this.state.address}</p>
                 </a>
                  <div class="__map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8077.8812724282!2d16.513953!3d59.5918824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3cd163ec2d91e87!2zQm9uZGVucyBWw6RzdGVyw6Vz!5e0!3m2!1sen!2sba!4v1597655792062!5m2!1sen!2sba" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                  </div>
                </div>
                <div class="column is-4">
                  <p class="__headline">ÖPPETTIDER</p>
                  <div class="columns is-multiline is-variable is-2 is-mobile">
                    {this.state.loading
                    ? <p>Loading...</p>
                    :<><div class="column is-4">
                      <p class="title">Måndag</p>
                      {this.state.opening_hours.monday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.monday[0].start} - {this.state.opening_hours.monday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Tisdag</p>
                      {this.state.opening_hours.tuesday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.tuesday[0].start} - {this.state.opening_hours.tuesday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Onsdag</p>
                      {this.state.opening_hours.wednesday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.wednesday[0].start} - {this.state.opening_hours.wednesday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Torsdag</p>
                      {this.state.opening_hours.thursday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.thursday[0].start} - {this.state.opening_hours.thursday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Fredag</p>
                      {this.state.opening_hours.friday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.friday[0].start} - {this.state.opening_hours.friday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Lördag</p>
                      {this.state.opening_hours.saturday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.saturday[0].start} - {this.state.opening_hours.saturday[0].end}</p>
                    }
                    </div>
                    <div class="column is-4">
                      <p class="title">Söndag</p>
                      {this.state.opening_hours.sunday[0].start === null
                      ? <p class="subtitle">Stängt</p>
                      : <p class="subtitle">{this.state.opening_hours.sunday[0].start} - {this.state.opening_hours.sunday[0].end}</p>
                    }
                    </div></>
                  }
                    
                  </div>
                </div>
                <div class="column is-4">
                  <p class="__headline">MAILADRESS</p>
                  <a href={`mailto:+${this.state.email}`} class="__email">{this.state.email}</a>
                  <p class="__headline">TELEFONNUMMER</p>
                  <a href={`tel:+${this.state.phone}`} class="__phone">
                    <img src={Phone} alt="Phone"/>
                    <span>{this.state.phone}</span>
                  </a>
                  <p class="__headline">FÖLJ OSS PÅ SOCIALA MEDIER</p>
                  <a href={this.state.facebook} class="__social" target="_blank">
                    <img src={Facebook} alt="Facebook"/>
                  </a>
                  <a href={this.state.instagram} class="__social" target="_blank">
                    <img src={Instagram} alt="Instagram"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container __footer">
          <div class="columns is-variable is-8">
            <div class="column is-10 is-offset-1">
              <div class="columns is-hidden-touch">
                <div class="column is-4 __left">
                  <p class="__copy">© Bondens Västerås 2020 • All rights reserved.</p>
                </div>
                <div class="column is-4 __center">
                  <figure class="image __footerLogo is-128x128">
                    <img src={Logo} alt="Bondens Västerås"/>
                  </figure>
                </div>
                <div class="column is-4 __right">
                  <a href="https://findie.se/" target="_blank">
                    <figure class="image __findie is-64x64">
                      <img src={Findie} alt="Findie"/>
                    </figure>
                  </a>
                </div>
              </div>
              <div class="columns is-hidden-desktop is-multiline is-mobile">
                <div class="column is-6 __center">
                  <figure class="image __footerLogo is-128x128">
                    <img src={Logo} alt="Bondens Västerås"/>
                  </figure>
                </div>
                <div class="column is-6 __left">
                  <p class="__copy">© Bondens Västerås 2020 • All rights reserved.</p>
                </div>
                <div class="column is-12 __right">
                  <a href="https://findie.se/" target="_blank">
                    <figure class="image __findie is-64x64">
                      <img src={Findie} alt="Findie"/>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}





