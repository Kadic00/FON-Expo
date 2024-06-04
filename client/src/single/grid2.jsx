import '../css/grid2.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
function Grid2({ otvoriFormu }) {
  const [foto, setFoto] = useState([]);
  const [broj2,setBroj2] = useState();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/fotografije").then((response) => {
      setFoto(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/manifestacija").then((response) => {
      setBroj2(response.data[1][2]);
    });
  }, []);
  const modal = document.querySelector(".forma");
  const overlay = document.querySelector(".overlay");
  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  const otvori = () => {
    
    otvoriFormu();
  };
    return (
        <div class="grid2">
  <div class="i1"><div className='aprned'>28.April Nedelja</div><div className='nazFoto'>Fotografije</div>
  </div>
  {foto.map((val,key) =>{
            return(
              <div class = {`i${val[0] + 1}`}><img src ={val[2]}></img>
              <div class="tekst-overlay">
              <p>Umetnik: {val[3]}</p>
              <p>Vreme: {val[4]}h - {val[5]}h</p>
              </div></div>
            )
          })}
  <div class="i7"><div className='dostupno'>Broj mesta:{broj2}/15</div><div className='dugRez1'><button className='dug1' onClick={() =>{ otvori() ;openModal()}}> Rezervisi</button></div></div>
  
  
      </div>
    );
  }
  
  export default Grid2;