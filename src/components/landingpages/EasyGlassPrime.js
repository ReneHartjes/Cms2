import React, { useEffect, useState } from 'react'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import Bestseller from '../includes/Bestseller'


function EasyGlassPrime(props) {

    let [lang, setlang] = useState()

    useEffect(()=>{
        setlang(lang = localStorage.getItem("Lang"))
      
    }, [lang])

    const langset = (message) => {
        setlang(message);

        props.lang(message)
      };
  return (
    <>
    <Header lang={langset}></Header>
    <div className='page'>
    <div className='BannerWarp'>

    </div>
    <div className='page-wrap'>

    <Bestseller lang={lang}></Bestseller>
  </div>  
  </div>
  <Footer></Footer>
    
    </>
  )
}

export default EasyGlassPrime