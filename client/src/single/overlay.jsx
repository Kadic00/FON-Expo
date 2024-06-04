import '../App.css';
import React, { useState, useEffect } from "react";
function Overlay() {
  const[forma, setForma] = useState();
  const[overlay, setOverlay] = useState();
  const[login, setLogin] = useState();
  const[tok, setTok] = useState();
  const[pre, setPre] = useState();
  useEffect(() => {
    setForma(document.querySelector(".forma"));
    setOverlay(document.querySelector(".overlay"));
    setLogin(document.querySelector(".login"));
    setTok(document.querySelector(".tokipromo"));
    setPre(document.querySelector(".pregled"));
  },[])
  
  const closeModal = function () {
    forma.classList.add("hidden");
    overlay.classList.add("hidden");
    login.classList.add("hidden");
    tok.classList.add("hidden");
    pre.classList.add("hidden")
  };
    return (
      <div className='overlay hidden' onClick={() => closeModal()}>
      </div>
    );
  }
  
  export default Overlay;