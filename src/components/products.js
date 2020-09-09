import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Decoration from "../images/decoration.svg"
import ProductImage from "../images/prod_1.jpg"
import ButtonIcon from "../images/tree-icon.svg"
import OrderArrow from "../images/tree-icon.svg"
import Image1 from "../images/dec-image-5.svg"
import Image2 from "../images/dec-image-9.svg"
function orderClick(){
  document.getElementById('orderDiv').classList.toggle('activeDiv');
}
export default class MenuSection extends React.Component {
  
    state = {
        fullMenu : [],
        loading:true,
    }
    componentDidMount(){
        axios.get(`https://login.findie.se/api/profiles/243/menus/`).then(res => {
            const fullMenu = res.data.data;
            this.setState({ fullMenu: fullMenu, loading:false }, function() {
                console.log(this.state.fullMenu)
            })
          });

    }
  render() {
    return (
        <section id="section_5" class="section">
      <div class="container __header">
        <div class="columns">
          <div class="column is-4">
            <h2 class="subtitle">Noggrant utvalda</h2>
            <p class="title">Produkter</p>
            <p class="content">Här hittar du ett urval av produkter vi säljer i vår butik. Besök oss för att upptäcka mer.</p>
          </div>
          <div class="column __info">
            <span>Alla produkter finns i vårt sortiment.</span>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-mobile">
          <div class="column __selectBox">
            <p class="__selectLabel">Välj kategori:</p>
          </div>
          <div class="column __selectCat is-hidden-desktop">
            <div class="select is-hidden-touch">
              <select>
                <option>All categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
          </div>
        </div>
        {this.state.loading ===true
                        ? <p>Loading</p>
                        : <Tabs forceRenderTabPanel defaultIndex={0}>
                        <TabList>
                            <div className="column">
                                <div className="nav">
                        {this.state.fullMenu[0].categories.map(category=>(
                            <Tab>{category.name}</Tab>  
                        ))}
                        </div>
                        </div>
                         </TabList>
                         {this.state.fullMenu[0].categories.map(category=>(

                                <TabPanel>
                                <div class="columns is-multiline products__sec">

                                <>
                                
                                {category.items.map(subcategory=>(
                                  <>
                                  {subcategory.id === null
                                  ? <div className="column is-12"><h3 className="title">{subcategory.name}</h3> </div>
                                :  <div class="column is-3">
                                <div class="__inner">
                                  {subcategory.image.full === "" || subcategory.image.full === null
                                  ? <></>
                                :<figure class="image is-1by1">
                                <img src={subcategory.image.full} alt="Bondens Vasteras"/>
                              </figure>
                                }
                                  
                                  <p class="title">{subcategory.name}</p>
                                  <p class="content">{subcategory.description}</p>
                                  <p class="__price">{subcategory.price}</p>
                                </div>
                              </div>
                                }
                                  </>
                                ))}
                                </>
                                 </div>
                                 
                                </TabPanel>
                               ))}
                           
                            
                         </Tabs>
  }
        
        <div class="columns">
          <div class="column">
            <div class="__innerBtn">
              <a onClick={orderClick} class="btn_large">
                <img src={ButtonIcon} alt="See all products and order" />
                <span>Beställ produkter för upphämtning</span>
              </a>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="__innerBox">
              <img class="dec__right is-hidden-touch" src={Image1} alt="This weeks bag"/>
              <img class="dec__right is-hidden-desktop" src={Image2} alt="This weeks bag"/>
              <div class="columns">
                <div class="column is-4">
                  <p class="title">Veckans kasse</p>
                  <p class="content">Varje vecka väljer vi ut ett urval av produkter för den bästa middagen eller lunchen.</p>
                  
                  <a onClick={orderClick} class="btn_order">
                    <span>Beställ och visa veckans kasse</span>
                    <img src={OrderArrow} alt="Order"/>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
  }
}





