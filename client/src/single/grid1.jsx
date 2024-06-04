import '../css/grid1.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { FcCancel } from "react-icons/fc";

function Grid1({ otvoriFormu }) {
  const [slik, setSlik] = useState([]);
  const [broj1,setBroj1] = useState();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/slikarstvo").then((response) => {
      setSlik(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/manifestacija").then((response) => {
      setBroj1(response.data[0][2]);
    });
  }, []);
  const otvori = () => {
    
    otvoriFormu();
  };
  const forma = document.querySelector(".forma");
  const overlay = document.querySelector(".overlay");
  const openModal = function () {
    forma.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
    return (
        <div class="grid1">
            <div class="item1"><div className='aprsub'>27.April Subota</div><div className='nazSlik'>Slikarstvo</div></div>
            {slik.map((val,key) =>{
            return(
              <div class = {`item${val[0] + 1}`}><img src ={val[2]}></img>
              <div class="tekst-overlay">
              <p>Umetnik: {val[3]}</p>
              <p>Vreme: {val[4]}h - {val[5]}h</p>
              </div></div>
            )
          })}
            <div class ="item6">{15 - broj1 !== 0 ? (<><div className='dostupno'>Broj mesta:{broj1}/15</div><div className='dugRez1'><button className='dug1' onClick={() => {otvori();openModal()}}> Rezervisi</button></div></>) : (<><h2>Popunjeno je <FcCancel /></h2></>)}</div>
      </div>
    );
  }
  
  export default Grid1;