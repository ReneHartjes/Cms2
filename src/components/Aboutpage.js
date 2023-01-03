import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Aboutpage.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import Systemblock from './includes/Systemblock'
import Projectblock from './includes/Projectblock'
import BannerNew from './includes/BannerNew';
import NewsBlog from './includes/NewsBlog';
import Mainpagetext from './includes/Mainpagetext';
import Newletterinvite from './includes/Newletterinvite';
import AboutBlock from './includes/AboutBlock';


function Aboutpage(props) {
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
    <div className='Banner-wrap '>



            <div className='Banner-Front about-Banner-wrap'>
                  <div className='Banner-left about-Banner'>
                    <div className='Banner-left-inner'>
                     <h3 className='about-banner-head'> 
                    <span>The</span>
                    <span>premium</span>
                    <span>brand</span>
                    <span>in</span>
                    <span className='goup'>railing</span>
                    <span className='goup'>systems</span>
                    
    
                    <span><p>
                    {"Ihr Spezialist für hochwertige Geländerlösungen und Komponenten "}
                      
                      
                    </p></span>
                      </h3>
                    
                  </div>
                  </div>

                </div>
            



        </div>
    </div>
    <div className='page-wrap'>


    
    <br />
    <br />
    <AboutBlock></AboutBlock>
  </div>  
  </div>

  <Newletterinvite></Newletterinvite>
  <Footer></Footer>
  </>
    
  )
}

export default Aboutpage