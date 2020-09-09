import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import FindieLogo from "../images/badge.svg"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
export default class FindieFooter extends React.Component {
  render() {
    return (
        <section id="findie__footer" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-12 socialMedia">
                        <a href="https://www.instagram.com/borgasundsrestaurang/" target="_blank">
                        <figure>
                            <img src={Instagram} alt="Instagram"/>
                        </figure>
                        </a>
                        <a href="https://www.facebook.com/borgasundsrestaurang/" target="_blank">
                        <figure>
                            <img src={Facebook} alt="Facebook"/>
                        </figure>
                        </a>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-4 text">
                        <p>© Borgåsunds restaurang 2020. All rights reserved.</p>
                    </div>
                    <div className="column is-4 logo">
                       <figure>
                           <img src={Logo} alt="Logo"/>
                       </figure>
                    </div>
                    <div className="column is-4 findieLogo">
                        <p>Denna hemsida är skapad med hjälp av Findie.</p>
                        <a href="https://findie.se/" target="_blank">
                        <figure>
                            <img src={FindieLogo} alt="Findie Logo"/>
                        </figure>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
  }
}

