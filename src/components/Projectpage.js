import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Projectpage.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import Systemblock from './includes/Systemblock'
import Projectblock from './includes/Projectblock'
import BannerNew from './includes/BannerNew';
import NewsBlog from './includes/NewsBlog';
import Mainpagetext from './includes/Mainpagetext';
import Newletterinvite from './includes/Newletterinvite';


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
                    <span>B2C</span>
                    <span>&</span>
                    <span>Inspiration</span>
                    <span>Blog</span>
                    <span>Portal</span>
                    
    
                    <span><p>
                    {"Übersicht zu interessanten Blog Artikeln, Ver-mittlung von Handwerkern und Inspiration zu bestehenden Projekten"}
                      
                      
                    </p></span>
                      </h3>
                    
                  </div>
                  </div>
                  <div className='Banner-right'>
                  <div className='Banner-right-inner'>
                      <div>
                        <a href="/"><b>{"Vermittlung von Handwerkern"}</b>
                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipis-cing elit"}</p></a>
                      </div>
                      <div>
                        <a href="/"><b>{"Projektberatung"}</b>
                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipis-cing elit, sed diam nonummy "}</p></a>
                      </div>
                      <div>
                        <a href="/"><b>{"Über Q-railing"}</b>
                        <p>{"Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."}</p></a>
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
    </div>
    <div className='page-wrap'>
    <Projectblock></Projectblock>
    <NewsBlog></NewsBlog>
    


  </div>  
  </div>
  <Mainpagetext></Mainpagetext>
  <Newletterinvite></Newletterinvite>
  <Footer></Footer>
  </>
    
  )
}

export default Projectpage