import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../images/calendar.svg"
import ArrowDown from "../images/arrow-down.svg"

export default class SpecialHours extends React.Component {
  state = {
    special_hours : [],
    loading:true,
}
componentDidMount(){
    axios.get(`https://login.findie.se/api/profiles/243/`).then(res => {
        const special_hours = res.data.data.custom_working_time;
        this.setState({ loading:false, special_hours:special_hours }, function() {
          console.log(this.state.special_hours)
        })
      });
     

}
  render() {
    return (
      <section id="section_8" class="section">
      <div class="container">
        <div class="columns">
          <div class="column __headline">
            <h2 class="title">Avvikande öppettider</h2>
            <p class="content">Nedan ser du våra avvikande öppettider. Om inga har angetts under röda dagar då gäller våra ordinarie öppettider.</p>
          </div>
        </div>
        <div class="columns __box is-multiline is-mobile">
          {this.state.loading
          ? <p>Loading...</p>
          : <>
          {this.state.special_hours.map(item => (
            <>
            {item.closed == true
            ?  <div class="column is-2-tablet is-6-mobile">
            <p class="title">{item.date}</p>
            <p class="subtitle">Stängt</p>
          </div>
            : <div class="column is-2-tablet is-6-mobile">
            <p class="title">{item.date} </p>
            <p class="subtitle">{item.start} - {item.end}</p>
          </div>
            }
            </>
          ))}
          </>
        } 
        </div>
      </div>
    </section>

    )
  }
}





