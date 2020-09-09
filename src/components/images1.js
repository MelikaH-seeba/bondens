import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import Image1 from "../images/test-image-1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

export default class Images1 extends React.Component {
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
        <section id="section__2" class="section">
      <div class="container is-fluid">
      <Swiper
      autoplay={{delay:5000}}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <figure className="image">
          {this.state.loading
          ? <p>Loading...</p>
          :<img src={this.state.images[0].images[0].fullhd} alt="Slider image"/>
        }
        </figure>
      </SwiperSlide>
      <SwiperSlide>
      <figure className="image">
      {this.state.loading
          ? <p>Loading...</p>
          :<img src={this.state.images[0].images[1].fullhd} alt="Slider image"/>
        }       
         </figure>
      </SwiperSlide>
      
    
    </Swiper>
      </div>
    </section>

    )
  }
}

