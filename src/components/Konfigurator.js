import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Konfigurator.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import Konfiguratoralpha from './Konfiguratoralpha';


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
    <div className='page-wrap Config-page-wrap'>
        <div className='Config-Headlines hidden'>
        <h2>Welcome to our Configurator(s)</h2>
        <br />
        <h4>You can either Configure a System</h4>
        <h4>or you find the System that fits your requirements</h4>
        </div>
    <div className='Config-cards hidden'>
        
        <div className='Config-card'>
            <a href={"/"+params.count+"/configurator/glass"}><img src="https://cdn-icons-png.flaticon.com/512/5984/5984464.png" width={"200px"}></img>
            Konfigurator</a>
        </div>

        <div className='Config-card'>
            <a href={"/"+params.count+"/configurator/glass"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtvqCVDdvseo1j-Eq9KkKBInNgyIMKnhb_A&usqp=CAU" width={"200px"}></img>
            Systemfinder</a>
        </div>
    </div>


   

    <div className='Config-selects'>
       

       <Konfiguratoralpha> </Konfiguratoralpha>
    </div>

  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Konfigurator