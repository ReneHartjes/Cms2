import { useContext, useState, useEffect } from 'react'

import { Langcontext } from './context/Langcontext';
import {useParams} from 'react-router-dom'
import './Mainpage.css'
import { render } from '@testing-library/react';
import Header from './includes/Header';
import Banner from './includes/Banner';
import Mainpagetext from './includes/Mainpagetext';
import Bestseller from './includes/Bestseller';
import Footer from './includes/Footer';
import Newletterinvite from './includes/Newletterinvite';
import Inspirations from './includes/Inspirations';
import BannerNew from './includes/BannerNew'
import Stats from './includes/Stats';
import Dndslider from './includes/Dndslider';
import Dragslider from './includes/Dragslider';
import Compare from './includes/Compare';



function Mainpage(props) {
    let [lang, setlang] = useState()
    let [count, setcount] = useState()
    let [globallang, setgloballang] = useState("eng")
    const params =  useParams()
    let [language, setlanguage] = useState("eng")
    const Paraaa = useParams()

    const langset = (message) => {
        let arr = message.split("§§")

        setlang(arr[0])

        props.lang(message)
      };
      useEffect(()=>{    
        setgloballang(props.language)

      },[])

    
  return (
  <>
    <Header language={props.language} lang={langset}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    <BannerNew></BannerNew>

    
    </div>
    <div className='page-wrap'>
    <br />
    <br />
   
  </div>  
  </div>

  <Mainpagetext language={props.language}></Mainpagetext>
  <Stats></Stats>

  <Inspirations></Inspirations>
  <div className='prodsliderwrap'><div className='prodslider'> <Dragslider></Dragslider></div></div>
  <Compare></Compare>
  <Newletterinvite language={props.language}/>
  <Footer language={props.language}></Footer>
  </>
    
  )
}

export default Mainpage