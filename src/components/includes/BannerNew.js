import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./BannerNew.css"

function BannerNew() {



  let [lang, setlang] = useState()
  let para  = useParams()
  let la;
  let arrla
  let [dataarr, setdataarr] = useState({data:[]})

  if(para.count){  la= para.count
    arrla = la.split("-") 
  }
  else
  {la="en"}

  useEffect(()=>{
    fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+arrla[0]+'-texts?filters[filter][$eq]=banner')
    .then(res=>res.json())
    .then(json=>{setdataarr(json);console.log(json)}).then(console.log(dataarr))


  },[])


  function renderbanner(){
    if(dataarr.data.length > 0){

      return(
        <>
        <div className='Banner-wrap'>
        <div className='Banner-big'>
            <img src="https://www.q-railing.com/files/thumbnails/prime-system-slider-004.1500x637x1.jpg"/>
        </div>
    
        <div className='Banner-small2-wrapper'>
        <div className='Banner-small2-wrap'>
            <div className='Banner-small3'>
            <div className='Banner-Front'>
                  <div className='Banner-left'>
                    <div className='Banner-left-inner'>
                     <h3> 
                    <span>The</span>
                    <span>premium</span>
                    <span>brand</span>
                    <span>in</span>
                    <span>railing</span>
                    <span>systems</span>
    
                    <span><p>
                    {dataarr.data[0].attributes.text1}
                      
                      
                    </p></span>
                      </h3>
                    
                  </div>
                  </div>
                  <div className='Banner-right'>
                  <div className='Banner-right-inner'>
                      <div>
                        <a href="/"><b>{dataarr.data[0].attributes.titel1}</b>
                        <p>{dataarr.data[0].attributes.text2}</p></a>
                      </div>
                      <div>
                        <a href="/"><b>{dataarr.data[0].attributes.titel2}</b>
                        <p>{dataarr.data[0].attributes.text3}</p></a>
                      </div>
                      <div>
                        <a href="/"><b>{dataarr.data[0].attributes.titel3}</b>
                        <p>{dataarr.data[0].attributes.text4}</p></a>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className='Banner-Back'>
    
            </div>
        </div>
        </div>
        </div>
    
    
    
    <div className='Banner-products-wrap'>
    <div className='Banner-products-inner-wrap'>
      <div className='Banner-products-text'>
      <h2> {dataarr.data[0].attributes.category1}</h2>
      <p>{dataarr.data[0].attributes.category2}</p>
      </div>
    <div className='Banner-products-inner'>
          <div> </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/geländerpfosten-kategorie.jpg"/>
      
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/bodenprofil-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/werkzeuge-kategorie.jpg"/>
           
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/befestigungsmaterial-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/glasadapter-kategorie.jpg"/>
    
            </a>
          </div>
          <div> </div>
          <div> </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/bodeglasklemmen-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/französische-balkone-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/glasleistenrohre-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/füllungen-und-halter-kategorie.jpg"/>
    
            </a>
          </div>
          <div className='Banner-products-card'>
            <a href="https://shop.de.q-railing.com/de-de/produktkategorien/bodenprofile/">
            <img src="https://shop.de.q-railing.com/content/files/images/homepage/categories/DE/handläufe-kategorie.jpg"/>
    
            </a>
          </div>
          <div> </div>
    </div>
    </div>
    </div>
    </>
      )


    }else{
      return(
        <></>
      )
    }

  }

  return (
    <>
      {renderbanner()}
    </>
  )
}

export default BannerNew