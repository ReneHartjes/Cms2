import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './components/Mainpage';
import Systems from './components/Systems';
import { Langcontext } from './components/context/Langcontext';
import { useEffect, useState } from 'react';

function App() {
  const [context, setcontext] = useState()
  const [globallang, setgloballang] = useState()

  function setlang(langval){
    setgloballang(langval)
    console.log(langval)
  }

  return (
    <>
    <Router>
    <Langcontext.Provider value={{ context, setcontext}}>
    <Routes>


    <Route path="/" element={<Mainpage lang={setlang}></Mainpage>} />
    <Route path="/systems" element={<Systems lang={setlang} language={globallang}></Systems>} />
    
    <Route path="/products" element={<Systems></Systems>} />
    

    </Routes>
    
    </Langcontext.Provider>
    </Router>
    </>
  );
}

export default App;
