import { useContext, useState, useEffect } from 'react'

import { Langcontext } from './context/Langcontext';
import {useParams} from 'react-router-dom'
import './Productpage.css'

import Header from './includes/Header';

import Footer from './includes/Footer';




function Productpage(props) {
    let [lang, setlang] = useState()
    let [count, setcount] = useState()
    let [globallang, setgloballang] = useState("eng")
    const params =  useParams()
    let [language, setlanguage] = useState("eng")
    let[productdata, setproductdata] = useState([])
    let [Datar, setDatar] = useState(false)




    const langset = (message) => {
        let arr = message.split("§§")
        setlang(arr[0])
        props.lang(message)
      };


      useEffect(()=>{    
        setgloballang(props.language)
   
      },[])
      useEffect(()=>{
        fetchdata(props.language)
      },[props.language])
  
  
 

    
      async function fetchdata(ee){

        fetch('https://squid-app-9h43v.ondigitalocean.app/api/products?filters[artid][$eq]='+params.artid.toString())
        .then(res=>res.json())
        .then(json=>{setproductdata(json)}).then(setDatar(true)).then(()=>lollol())
    }

    function lollol(){
        if(productdata.data){
          return(
            <>
            <img src={productdata.data[0].attributes.imgurl}/>
            <h2>{productdata.data[0].attributes.title}</h2>
          <br />
          <p>{productdata.data[0].attributes.description}</p>
          <br />
         <p>{productdata.data[0].attributes.text2}</p> 
        
            </>
          )
        }else{
        
          return(
            <>
            <h1>fetching</h1>
            </>
          )
        }
      }
      

  return (
  <>
    <Header language={props.language} lang={langset}></Header>
    <div className='page'>
    <div className='page-wrap'>
        <h1>Productpage</h1>
        {lollol()}
  </div>  
  </div>
  <Footer language={props.language}></Footer>
  </>
    
  )
}

export default Productpage