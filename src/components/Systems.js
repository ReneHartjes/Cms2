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
import Systemblock from './includes/Systemblock'
import Projectblock from './includes/Projectblock'


function Systems(props) {
  let [lang, setlang] = useState()
  let [count, setcount] = useState()
  let [globallang, setgloballang] = useState()
  const params =  useParams()
  let [language, setlanguage] = useState()

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
    <Header lang={langset} language={props.language}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    
    </div>
    <div className='page-wrap'>
    <Systemblock language = {props.language}></Systemblock>

  </div>  
  <br /><br/><br/><br/>

<Projectblock></Projectblock>
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Systems