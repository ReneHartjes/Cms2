import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './components/Mainpage';
import Systems from './components/Systems';
import EasyGlassPrime from './components/landingpages/EasyGlassPrime';
import Service from './components/Service';
import { Langcontext } from './components/context/Langcontext';
import Landingpage from './components/Landingpage';
import { useEffect, useState } from 'react';
import Productpage from './components/Productpage';
import Projectpage from './components/Projectpage';

function App() {
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



  return (
    <>
    <Router>
    <Langcontext.Provider value={{ context, setcontext}}>
    <Routes>


    <Route path="/" element={<Mainpage lang={setlang} language={globallang}></Mainpage>} />
    <Route path="/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/products/:artid" element={<Productpage lang={setlang} language={globallang}></Productpage>} />
    <Route path="/systems/EasyGlassPrime" element={<EasyGlassPrime lang={setlang} language={globallang}></EasyGlassPrime>} />
    <Route path="/products" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/systems/:pagetitle" element={<Landingpage lang={setlang} language={globallang}></Landingpage>} />


    <Route path="/:count" element={<Mainpage lang={setlang} language={globallang}></Mainpage>} />
    <Route path="/:count/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    <Route path="/:count/service" element={<Service lang={setlang} language={globallang}></Service>} />
    <Route path="/:count/projects" element={<Projectpage lang={setlang} language={globallang}></Projectpage>} />
    </Routes>
    
    </Langcontext.Provider>
    </Router>
    </>
  );
}

export default App;
