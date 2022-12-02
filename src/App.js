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
import { Langcontext } from './components/context/Langcontext';
import Landingpagetemplate from './components/landingpages/Landingpagetemplate';
import { useEffect, useState } from 'react';

function App() {
  const [context, setcontext] = useState()
  const [globallang, setgloballang] = useState()
  const [globalcountry, setglobalcountry] = useState()

  function setlang(langval){
    setgloballang(langval)

  }

  function setcount(langval2){
    setglobalcountry(langval2)
    if(langval2){
      console.log(langval2)
    }
  }

  return (
    <>
    <Router>
    <Langcontext.Provider value={{ context, setcontext}}>
    <Routes>


    <Route path="/" element={<Mainpage country={setcount}lang={setlang}></Mainpage>} />
    <Route path="/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    
    <Route path="/systems/EasyGlassPrime" element={<EasyGlassPrime lang={setlang} language={globallang}></EasyGlassPrime>} />
    <Route path="/products" element={<Systems></Systems>} />

    <Route path="/systems/EasyGlassSmart" element={<Landingpagetemplate country={setcount}lang={setlang} />} />


    </Routes>
    
    </Langcontext.Provider>
    </Router>
    </>
  );
}

export default App;
