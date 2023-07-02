import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "./Product.css"
import 



export default function Product(){
    return(
        <div >
            <Header/>
            <div className="product-main-container">
            <div class="filter-container">
             <div>  
                <h2>FILTER</h2> 
                <p>CLEAR ALL</p>
             </div>

              <div>
                <p>SORT</p>
                <label >
                    <input type= "radio" className="checkbox"/>
                Price- Low To High
               
                </label>
                <br/>
                <label >
                    <input type= "radio" className="checkbox"/>
                Price- High to Low
               
                </label>
                </div>  

                <div>
                <p>PRICE</p>
                <label >
                    <input type= "range" min="500" max="5000" value="5000"id="slider" list="tickmarks" className="price-range"/>
                    <datalist>
                        <option value="500" label="500"></option>
                        <option value="1000" label="1k"></option>
                        <option value="2000" label="2k"></option>
                        <option value="3000" label="3k"></option>
                        <option value="4000" label="4k"></option>
                        <option value="5000" label="5k"></option>
                    </datalist>
               
                </label>
                </div> 
                <hr></hr>
            <div class="categories">
                <p>CATEGORIES</p>
                <label>
                    <input type="checkbox"  classname="check"/>
                    BOWL
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                    GLASSWARE
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                    PLATES
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                    DINNERSET
                </label>


            </div>
   <hr></hr>
          <div class="categories">
                <p>BRANDS</p>
                <label>
                    <input type="checkbox"  classname="check"/>
                   MITLON
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                   BOROSIL
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                   TREO
                </label>
                <label>
                    <input type="checkbox"  classname="check"/>
                   CLAY CRAFT
                </label>



            </div>
            <div>
              <p>RATINGS</p>   
              <label>
                <input type="radio" class="ratings"/>
                4 Stars & above
                </label>
                <label>
                <input type="radio" class="ratings"/>
                3 Stars & above
                </label>
                <label>
                <input type="radio" class="ratings"/>
                2 Stars & above
                </label>
                <label>
                <input type="radio" class="ratings"/>
                1 Stars & above
                </label>
           </div>
           
          
          
            </div>


            <div class="product-container">

            <h1>Products</h1>

            </div>
               <div>
                <div>
                    <image class="natura-bowl" src=
                </div>
               </div>

            </div>
              {/* <Footer/> */}
        </div>
    )
}