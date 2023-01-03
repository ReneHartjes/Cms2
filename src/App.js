import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { redirect } from "react-router-dom";
import Mainpage from './components/Mainpage';
import Systems from './components/Systems';
import EasyGlassPrime from './components/landingpages/EasyGlassPrime';
import Service from './components/Service';
import { Langcontext } from './components/context/Langcontext';
import Landingpage from './components/Landingpage';
import { useEffect, useState } from 'react';
import Productpage from './components/Productpage';
import Projectpage from './components/Projectpage';
import Konfigurator from './components/Konfigurator';
import KonfiguratorDetail from './components/KonfiguratorDetail';
import ProjectDetail from './components/ProjectDetail';
import Dbip from './components/includes/Dbip';
import Aboutpage from './components/Aboutpage';

function App() {
  let[countryy, setcountryy] = useState()
  const [context, setcontext] = useState()
  const [globallang, setgloballang] = useState("Eng")
  const [globalcountry, setglobalcountry] = useState("United States")
  if(localStorage.getItem("Lang")){
    if(localStorage.getItem("Lang") != globallang){
      setgloballang(localStorage.getItem("Lang"))
    }
  }
  if(localStorage.getItem("Country")){
    if(localStorage.getItem("Country") != globalcountry){
      setglobalcountry(localStorage.getItem("Country"))
    }
  }
  function setlang(langval){
    let langsplit = langval.split("§§")
    setgloballang(langsplit[0])
    setglobalcountry(langval[1])

  }

  useEffect(()=>{
    //fetch('http://api.db-ip.com/v2/free/self')
    //.then(res=>res.json())
    //.then(json=>{setcountryy(json);console.log(json)})
  },[])



  return (
    <>
    <Router>
    <Langcontext.Provider value={{ context, setcontext}}>
    <Routes>


  
    <Route path="/" element={<Dbip></Dbip>}  />
  


    <Route path="/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/products/:artid" element={<Productpage lang={setlang} language={globallang}></Productpage>} />
    <Route path="/systems/EasyGlassPrime" element={<EasyGlassPrime lang={setlang} language={globallang}></EasyGlassPrime>} />
    <Route path="/products" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/systems/:pagetitle" element={<Landingpage lang={setlang} language={globallang}></Landingpage>} />


    <Route path="/:count" element={<Mainpage lang={setlang} language={globallang}></Mainpage>} />
    <Route path="/:count/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/service" element={<Service lang={setlang} language={globallang}></Service>} />
    <Route path="/:count/projects" element={<Projectpage lang={setlang} language={globallang}></Projectpage>} />
    <Route path="/:count/projects/:projectname" element={<ProjectDetail lang={setlang} language={globallang}></ProjectDetail>} />
    <Route path="/:count/configurator" element={<Konfigurator lang={setlang} language={globallang}></Konfigurator>} />
    <Route path="/:count/configurator/:title" element={<KonfiguratorDetail lang={setlang} language={globallang}></KonfiguratorDetail>} />

    <Route path="/:count/about" element={<Aboutpage lang={setlang} language={globallang}></Aboutpage>} />
    </Routes>
    
    </Langcontext.Provider>
    </Router>
    </>
  );
}

export default App;
