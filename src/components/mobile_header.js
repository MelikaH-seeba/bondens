import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Burger from '@animated-burgers/burger-slip' 
import '@animated-burgers/burger-slip/dist/styles.css' 
import Logo from "../images/logo.svg"
function orderClick(){
  document.getElementById('orderDiv').classList.toggle('activeDiv');
}
function handleClick(event){
  event.target.classList.toggle('open');
  document.getElementsByClassName('mobileMenuContainer')[0].classList.toggle('open');
}
function onClickMenuItem(event){
  document.getElementsByClassName('mobileMenuContainer')[0].classList.toggle('open');
  document.getElementsByClassName('burger-slip')[0].classList.toggle('open');
}

  export default class MobileSection extends React.Component {
    render() {
      return (
        <section className="section is-hidden-desktop" id="section_header_mobile">
         <div className="columns is-mobile">
            <div className="column is-5">
              <figure>
                <img src={Logo} alt="Logo"/>
              </figure>
            </div>
            <div className="column is-5"></div>
            <div className="column is-2">
            <Burger isOpen={ false }
          onClick={handleClick.bind(this)}
           />
            </div>
          </div>
           <div className="container mobileMenuContainer">
             <div className="columns">
               <div className="column is-12">
                 <a href="#section_3" onClick={onClickMenuItem.bind(this)}>Om oss</a>
               </div>
               <div className="column is-12">
                 <a href="#section_5" onClick={onClickMenuItem.bind(this)}>Våra produkter</a>
               </div>
               <div className="column is-12">
                 <a href="#section_6" onClick={onClickMenuItem.bind(this)}>Samarbetspartners</a>
               </div>
               <div className="column is-12">
                 <a href="#eventzs" onClick={onClickMenuItem.bind(this)}>Senaste nytt</a>
               </div>
               <div className="column is-12">
                 <a href="#footer_section" onClick={onClickMenuItem.bind(this)}>Kontakta oss</a>
               </div>
               <div className="column is-12">
                 <a onClick={orderClick}>Beställ för upphämtning</a>
               </div>
             </div>
           </div>
        </section>
        
      )
    }
  }
  