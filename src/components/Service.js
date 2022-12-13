import { useContext, useState, useEffect } from 'react'

import { Langcontext } from './context/Langcontext';
import {useParams} from 'react-router-dom'
import './Service.css'
import Header from './includes/Header';
import Banner from './includes/Banner';
import Mainpagetext from './includes/Mainpagetext';
import Bestseller from './includes/Bestseller';
import Footer from './includes/Footer';
import Systemblock from './includes/Systemblock'


function Service(props) {
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

    <div className='page-wrap'>
    <div className='Service-wrap'>
        <div className='Service-select'>
            <button onClick={()=>{console.log("Downloads")}}>
                DOWNLOADS
            </button>
            <button onClick={()=>{console.log("Downloads")}}>
                BERATUNG
            </button>
            <button onClick={()=>{console.log("Downloads")}}>
                SCHULUNGEN
            </button>
            <button onClick={()=>{console.log("Downloads")}}>
                MONTAGEVIDEOS
            </button>
            <button onClick={()=>{console.log("Downloads")}}>
            ZERTIFIKATE UND <br />QUALITÄTSPRÜFZEICHEN
            </button>
            <button onClick={()=>{console.log("Downloads")}}>
            KATALOGE UND BROSCHÜREN  <br />ANFORDERN
            </button>
            <button onClick={()=>{console.log("ARTIKELNUMMER-KONVERTER")}}>
            ARTIKELNUMMER-KONVERTER
            </button>
            <button onClick={()=>{console.log("PRODUKTINFORMATIONEN")}}>
            PRODUKTINFORMATIONEN
            </button>
        </div>


        <div className='Service-data'>
            <h1>Suche</h1>
            <div className='Service-search'>
                    <input type="text" /><button>search</button>
            </div>
        </div>
    </div>
  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Service