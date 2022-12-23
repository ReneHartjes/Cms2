import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Konfigurator.css'
import Header from './includes/Header';
import Footer from './includes/Footer';


function Konfigurator(props) {
  let [lang, setlang] = useState()
  let [count, setcount] = useState()
  let [globallang, setgloballang] = useState()
  const params =  useParams()
  let [language, setlanguage] = useState()
  let [dataarr, setdataarr] = useState({data:[]})

  const langset = (message) => {
      let arr = message.split("§§")
      setlang(arr[0])
      props.lang(message)
    };
    useEffect(()=>{    
       
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]=ger')
            .then(res=>res.json())
            .then(json=>{setdataarr(json);console.log(json)}).then(console.log(dataarr))
        
    },[])


    function showitems(propers){
        if(document.getElementById(propers).classList.contains("hidden")){
            document.getElementById(propers).classList.remove("hidden")
            document.getElementById(propers).classList.add("shown")
        }else{
            document.getElementById(propers).classList.remove("shown")
            document.getElementById(propers).classList.add("hidden")
        }
        
    }

function Fetchee(){
    if(dataarr.data.length > 0){


        return(
            <></>
        )
       
        
    }else{
        return(
            <>
            </>
        )
    }

}

    
  return (
  <>
    <Header lang={langset} language={props.language}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    
    </div>
    <div className='page-wrap'>
    <div className='Config-cards'>
        
        <div>
            <img scr=""></img>
            <a href={"/"+params.count+"/configurator/glass"}>Glass</a>
        </div>
    </div>


    configurator:{params.title}

    <div className='Config-selects'>
       

        {Fetchee()}
    </div>

  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Konfigurator