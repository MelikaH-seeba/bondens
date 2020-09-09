import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Tree from "../images/tree-icon.svg"
import Logo from "../images/logo.svg"
function orderClick(){
  document.getElementById('orderDiv').classList.toggle('activeDiv');
}
const Header = ({ siteTitle }) => (
    
    <header id="header__section">

<div id="orderDiv">
        <iframe src="https://bondens-vasteras-ordering.netlify.app/">
        </iframe>
    </div>

    <div class="container is-fluid is-hidden-touch">
      <div class="columns">
        <div class="column __mobileMenu">
          <a href="#">
            <figure class="image">
              <img src={Logo} alt="Bondens Vasteras" />
            </figure>
          </a>
          <div id="mobileBtn" class="__menuHamburger is-hidden-desktop">
            <svg class="ham hamRotate ham4" viewBox="0 0 100 100" width="40" onclick="this.classList.toggle('active')">
              <path
                  class="line top"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
              <path
                  class="line middle"
                  d="m 70,50 h -40" />
              <path
                  class="line bottom"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
          </div>
        </div>
        <div id="mobileMenu" class="column is-10 __menuContainer">
          <div class="__inner">
            <nav>
              <a href="#section_3">Om oss</a>
              <a href="#section_5">Våra produkter</a>
              <a href="#section_6">Samarbetspartners</a>
              <a href="#eventzs">Senaste nytt</a>
              <a href="#footer_section">Kontakta oss</a>
            </nav>
            <a class="btn_header" onClick={orderClick}>
              <img src={Tree} alt="Beställ för upphämtning" />
              <span>Beställ för upphämtning</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
