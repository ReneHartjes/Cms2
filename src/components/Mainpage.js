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
    <Banner></Banner>	
    </div>
    <div className='page-wrap'>
    <Mainpagetext language={props.language}></Mainpagetext>
   
  
  </div>  
  </div>
  <Inspirations></Inspirations>
  <Newletterinvite language={props.language}/>
  <Footer language={props.language}></Footer>
  </>
    
  )
}

export default Mainpage