import React, { useEffect, useState } from 'react'

function Dbip() {
    let[country, setcountry] = useState({ipAddress:'',countryCode:'',countryName:''})
    let jsono
    useEffect(()=>{
    


        fetch('http://api.db-ip.com/v2/free/self')
        .then(res=>res.json())
        .then(json=>{setcountry(json); jsono=json.countryCode ; console.log(json)}).then(console.log("country")).then(()=>{
            console.log(jsono)
            setTimeout(()=>{triggerLoad()},10)
        }).then(()=>finalredir())
    },[])

    useEffect(()=>{
        finalredir()

    },[jsono])

    function triggerLoad(){
            var language = window.navigator.userLanguage || window.navigator.language
            console.log(language)
            console.log(country)
            setTimeout(()=>{console.log(country)},1000)
            //window.location.replace("/"+language+"-"+"country.countryCode.toLowerCase()")
    }

    function finalredir(){
        var language = window.navigator.userLanguage || window.navigator.language
        console.log(language)
        console.log(country)
        setTimeout(()=>{console.log(country)},1000)
       window.location.replace("/"+language+"-"+jsono.toLowerCase())

    }

  return (
    <>
    Redirecting according to your language settings ... 
    </>
  )
}

export default Dbip