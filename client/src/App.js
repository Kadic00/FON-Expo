import './App.css';
import Header from './single/header';
import Grid1 from './single/grid1';
import Grid2 from './single/grid2';
import Forma from './single/forma';
import Overlay from './single/overlay';
import Login from './single/login';
import Pregled from "./single/pregled";
import React, { useState, useEffect } from "react";

function App() {
  const [formaIzvor, setFormaIzvor] = useState(null);
  const [preneseniNiz, postaviPreneseniNiz] = useState([]);

  const otvoriFormuIzGrid1 = () => {
    setFormaIzvor(1);
  };
  const otvoriFormuIzGrid2 = () => {
    setFormaIzvor(0);
  };
  
  return (
    <div className="App">
    <Header />
    <Grid1 otvoriFormu={otvoriFormuIzGrid1}/>
    <Grid2 otvoriFormu={otvoriFormuIzGrid2}/>
    <Forma izvor={formaIzvor}/>
    <Overlay />
    <Login prenesiNiz={postaviPreneseniNiz} />
    <Pregled zni={preneseniNiz} />
    </div>
  );
}

export default App;
