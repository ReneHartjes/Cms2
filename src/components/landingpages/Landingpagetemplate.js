import React, { useEffect, useState } from 'react'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import Bestseller from '../includes/Bestseller'
import {useParams} from 'react-router-dom'


function Landingpagetemplate(props) {
    
    let [lang, setlang] = useState()
    let [country, setcountry] = useState()
    let [Detailstate, setDetailstate] = useState(false)
    let [content, setcontent] = useState([])
    
    console.log(document.location.href.match(/([^\/]+$)/)[1])
    useEffect(()=>{
        setlang(lang = localStorage.getItem("Lang"))
        setcountry(country = localStorage.getItem("Country"))
    }, [lang, country])
    
    useEffect(()=>{
        fetch('http://localhost:8080/landingpage/'+lang+'/EasyGlassSmart')
        .then(res=>res.json())
        .then(json=>{setcontent(json);console.log(content)})
    },[])
    useEffect(()=>{
        setDetails()

    }, [Detailstate])


    const langset = (message) => {
        setlang(message);

        props.lang(message)
      };


    function setDetails(){
        if(Detailstate){
            return(
                <>
                    <h1>Detail</h1>
                </>
            )
        }else{

            return(
                <>
                <h1>{content.title1}</h1>
                <p>{content.text1}</p>
                <h3>{content.title2}</h3>
                <p>{content.text2}</p>
                </>
            )
        }

    }

  return (
    <>
    <Header lang={langset}></Header>
    <div className='page'>
    <div className='BannerWarp'>
        <div className='Bannertop'>
            <img src={content.image}/>
        </div>
    </div>
    <div className='page-wrap' id="landingpage">

        <div className='Landingpage-block'>
        <div className='Landingpage-Text'>
        <button onClick={()=>{setDetailstate(false)}}>INFORMATIONS</button><button onClick={()=>{setDetailstate(true)}}>DETAILS</button>
            {setDetails()}
        </div>
        </div>
        <div>

        </div>
  </div>  
  </div>
  <Footer></Footer>
    
    </>
  )
}

export default Landingpagetemplate