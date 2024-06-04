import '../css/header.css';
import React, { useState, useEffect } from "react";
import { FcCalendar } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

function Header() {
  const[login, setLogin] = useState();
  const[overlay, setOverlay] = useState();
  useEffect(() => {
    setLogin(document.querySelector(".login"));
    setOverlay(document.querySelector(".overlay"));
  },[])
  const openModal = function () {
    login.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
    return (
      <div className='okvir'>
        <div className='naslov'>Fon Expo 2024</div>
        <div className='mesto'>
            <div className='grad'><FcGlobe />Beograd</div>
            <div className='ulica'><FcHome />Jove Ilića 154</div>
        </div>
        <div className='datumi'>
            <div className='d1'><FcCalendar />Dan1 - Slikarstvo</div>
            <div className='d2'><FcCalendar />Dan2 - Fotografija</div>
        </div>
        <div className='btn-pregled'><button onClick={() => openModal()}>Pogledaj prijavu</button></div>
        
      </div>
    );
  }
  
  export default Header;
  