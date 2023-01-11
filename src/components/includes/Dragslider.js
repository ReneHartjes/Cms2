import React from 'react'
import {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Dragslider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Dragslider() {



let [sliderarr, setsliderarr] = useState(["https://shop.us.q-railing.com/product/image/medium/132500_-11%3D0000000150000bc7_0.jpg"
,"https://shop.us.q-railing.com/product/image/medium/140749_-11%3D0000000150000bd8_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/146200_-11%3D0000000150000c14_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/146924_-11%3D0000000150000bf1_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/168210_-11%3D0000000150000c7f_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/146200_-11%3D0000000150000c14_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/146924_-11%3D0000000150000bf1_0.jpg",
"https://shop.us.q-railing.com/product/image/medium/168210_-11%3D0000000150000c7f_0.jpg"
])

let descarr = [["Glass clamp | 304 SS | MOD 2500","132500"],
["Adjustable Glass Adapter | 316 SS | MOD 0749","140749"],
["Base Clamp |  316 SS | MOD 6200","146200"],
["Cap rail | 316 SS | MOD 6924","146924"],
["Easy Glass Smart Top Mount | Aluminum | MOD 8210","168210"],
["Glass clamp | 304 SS | MOD 2500","132500"],
["Adjustable Glass Adapter | 316 SS | MOD 0749","140749"],
["Base Clamp |  316 SS | MOD 6200","146200"]]

let nbrarr= [
    "132500","140749","146200","146924","168210","132500","140749","146200"
]

let bannerarr= [
    "0","2","1","0","1","0","3","2"
]
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  
  return (
    <>
     <div className='Contentslider' id="Contentslider">
            
                <Carousel responsive={responsive}
                infinite={true}
                itemClass="carousel-item-padding-20-px"
                >
                    {
                        sliderarr.map((item,index)=>{
                                let bannertype1;
                                let bannertype2;
                                let bannertype3;
                                if(bannerarr[index] == 0){
                                    bannertype1 = "hidden"
                                    bannertype2 = "hidden"
                                    bannertype3 = "hidden"
                                }
                                if(bannerarr[index] == 1){
                                    bannertype1 = "visible"
                                    bannertype2 = "hidden"
                                    bannertype3 = "hidden"
                                }
                                if(bannerarr[index] == 2){
                                    bannertype1 = "hidden"
                                    bannertype2 = "visible"
                                    bannertype3 = "hidden"
                                }
                                if(bannerarr[index] == 3){
                                    bannertype1 = "hidden"
                                    bannertype2 = "hidden"
                                    bannertype3 = "visible"
                                }
                            return(
                                <div className='product-card'>
                                    <p id="banner-aktion" className={bannertype1}>AKTION</p>
                                    <p id="banner-neu" className={bannertype2}>NEU</p>
                                    <p id="banner-promo" className={bannertype3}>Q4LESS</p>
                                    
                                    <a>
                                    <img src={item} width="200" />
                                    <h3>{descarr[index]}</h3>

                                    <p>{nbrarr[index]}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </Carousel>
         
     </div>
  </>
  )
}

export default Dragslider