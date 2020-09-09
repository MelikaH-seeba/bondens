import React from "react"
import { Link } from "gatsby"

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
import Image1 from "../images/left.png"
import Image2 from "../images/right.png"

export default class BokaSection extends React.Component {
    
  render() {
    return (
        <section className="section" id="arrange__section">
            
           <Tabs>
            <div className="columns">
                <div className="column is-6 tabsColumn">
                <h3>05</h3>
           <h4>Arrangemang</h4>
           <p className = "arangeTitle">Hos oss kan ni hålla i era egna arrangemang. Allt från födelsedagsfest, jubileum, släktträff, dop, bröllop till klassåterträff. Skicka en förfrågan genom formuläret för arrangermang på denna sida.</p>
           
            <TabList>
                <Tab>
                    <h6>Bröllop</h6>
                    <p>Platsen för att skapa minnen för livet i en historisk och intim miljö. Varför inte komma sjövägen till er vigsel?</p>
                </Tab>
                <Tab>
                    <h6>Konferens</h6>
                    <p>Samla ledningsgruppen, arbetslaget eller föreningen för ett miljöombyte i vår inspirerande omgivning med sjöutsikt. Vi serverar god mat som frambringar ny kraft.</p>
                </Tab>
                <Tab>
                    <h6>Fest</h6>
                    <p>Borgåsunds restaurang passar bra för festligheter för upp till hundratalet gäster.</p>
                </Tab>
                <Tab>
                    <h6>Dop</h6>
                    <p>Vi vill gärna arrangera ert dop eller namngivning i vår personliga och varma miljö</p>
                </Tab>
                
            </TabList>
            <div className="columns">
                <div className="column phoneMail is-12">
                <figure>
                                 <img src={Phone} alt="Phone"/>
                             </figure>
                             <p>070 44 00 329</p>
                         
                             <figure>
                                 <img src={Mail} alt="Mail"/>
                             </figure>
                             <p>info@borgasundsrestaurang.se</p>
                </div>
            </div>
                </div>

        <div className="column is-6 ">
        <TabPanel>
            <div className="columns imagesColumns">
                <div className="column is-8">
                <figure>
          <img src={Image1} alt="Image"/>
      </figure>
                </div>
                <div className="column is-8">
                <figure>
          <img src={Image2} alt="Image"/>
      </figure>
                </div>
            </div>
    </TabPanel>
    <TabPanel>
            <div className="columns imagesColumns">
                <div className="column is-8">
                <figure>
          <img src={Image2} alt="Image"/>
      </figure>
                </div>
                <div className="column is-8">
                <figure>
          <img src={Image2} alt="Image"/>
      </figure>
                </div>
            </div>
    </TabPanel>
    <TabPanel>
            <div className="columns imagesColumns">
                <div className="column is-8">
                <figure>
          <img src={Image1} alt="Image"/>
      </figure>
                </div>
                <div className="column is-8">
                <figure>
          <img src={Image1} alt="Image"/>
      </figure>
                </div>
            </div>
    </TabPanel>
    <TabPanel>
            <div className="columns imagesColumns">
                <div className="column is-8">
                <figure>
          <img src={Image2} alt="Image"/>
      </figure>
                </div>
                <div className="column is-8">
                <figure>
          <img src={Image1} alt="Image"/>
      </figure>
                </div>
            </div>
    </TabPanel>
   
        </div>
        </div>
            </Tabs>
           
        </section>

    )
  }
}





