import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Projectpage.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import Systemblock from './includes/Systemblock'


function Projectpage(props) {
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
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Projectpage