import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../images/calendar.svg"
import ArrowDown from "../images/arrow-down.svg"
import Mail from "../images/mail.svg"
import Phone from "../images/phone.svg"


export default class BokaSection extends React.Component {
    state = {
        startDate: new Date(),
        email:"",
        phone:"",
        
      }
      handleChange = date => {
        this.setState({
          startDate: date,
        }, function(){
        })
      }
      componentDidMount(){
        axios.get('https://login.findie.se/api/profiles/256/').then(res => {
            const phone = res.data.data.phone;
            const email = res.data.data.email;
            this.setState({email:email, phone:phone},function() {
            })
          }); 
    }
  render() {
    return (
        <section className="section" id="boka__section">
                <div className="columns is-multiline">
             <div className="column is-6 bookingText">
                 <div className="inner">
                     <h3>03</h3>
                 <h2>BOKA Bord</h2>
                 <p>Välkomna att boka bord hos oss på Borgåsunds restaurang genom formuläret på denna sida. Vi rekommenderar dig att boka bord om ni är ett sällskap över X-presoner.</p>
<br/>
<p className="secondText">Vi har gott om utrymme och det går även bra att bara droppa in hos oss.</p>
                <hr/>
                <h4>Frågor?</h4>
                <p>Kontakta oss direkt:</p>
                 </div>
                 
                     <div className="columns">
                         <div className="column is-12 phoneMail">
                         <figure>
                                 <img src={Phone} alt="Phone"/>
                             </figure>
                             <a href={`tel:+${this.state.phone}`}>{this.state.phone}</a>
                         
                             <figure>
                                 <img src={Mail} alt="Mail"/>
                             </figure>
                             <a href={`mailto:+${this.state.email}`}>{this.state.email}</a>
                             
                         </div>
                     </div>
                 
          </div>
                    <div className="column is-6 inputs">
                                    <div className="columns">
                                        <div className="column is-6">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="För- & efternamn"/>
                                            
                                        </p>                                        </div>
                                        <div className="column is-6">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="Mailadress"/>
                                            
                                        </p>                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="Telefonnummer"/>
                                            
                                        </p>                                        </div>
                                        <div className="column is-6">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="Antal personer"/>
                                            
                                        </p>  
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="Tid"/>
                                            
                                        </p>                                        </div>
                                        <div className="column is-6">
                                        <DatePicker
                                            className="inputDate"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            minDate={new Date()}
                                        />
                                        </div>
                                    </div>
        
                                    <div className="columns">
                                        <div className="column is-12">
                                            <textarea className="notes" type="text" placeholder="Meddelande"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <button className="button bookButton">
                                                Skicka bokningsförfrågan
                                            </button>
                                        </div>
                                    </div>
            
                    </div>
                </div>
            
        </section>

    )
  }
}





