import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import Image2 from "../images/image-2.jpg"
import Prev from "../images/prev_btn.svg"
import Next from "../images/next_btn.svg"
import Image1 from "../images/dec-image-3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
export default class ImagesSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: true,
        loading1: true,
        images: "",
        description:[],
    }
  }
componentDidMount(){
    this.setState({loading:true})
    axios.get('https://login.findie.se/api/profiles/243/galleries').then(res => {
       const images = res.data.data;
        this.setState({loading:false, images:images},function() {
          console.log(this.state.images)
        })
      }); 
      axios.get('https://login.findie.se/api/profiles/243').then(res => {
      var description = res.data.data.description;
       description = description.split('<br />\r\n<br />\r\n')
        this.setState({loading1:false, description:description},function() {
        })
      }); 
}
  render() {
    return (
      <section id="section_3" class="section">
      <div class="container">
        <div class="columns">
          <div class="column __title">
            <figure class="image">
              <img src={Image1} alt="Bondens Vasteras" />
            </figure>
          </div>
        </div>
      </div>
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <div class="__inner">
              <h2 class="subtitle">Välkommen till</h2>
              <p class="title">Bondens Västerås</p>
              <div class="content">
              {this.state.description.map(text =>(
                             <p>{text}</p>
                         ))}
                
               
              </div>
            </div>
          </div>
          <div class="column is-8">
            {this.state.loading
            ? <p>Loading...</p>
            : <Swiper
            autoplay={{delay:5000}}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {this.state.loading
            ? <p>Loading...</p>
          :<> 
          {this.state.images[1].images.map(image=>(
            <SwiperSlide>
          <figure className="image">
            <img src={image.fullhd} alt="Slider image"/>
          </figure>
        </SwiperSlide>
          ))}
           </>
          }
          
          </Swiper>
            }
         
          </div>
        </div>
      </div>
    </section>
    )
  }
}





