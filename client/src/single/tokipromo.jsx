import '../css/forma.css';
import React, { useState, useEffect } from "react";

function TP(props) {
    return (
      <div className='tokipromo hidden'>
        <p>Uspesna prijava!</p>
        <p>Promo kod: {props.promo}</p>
        <p>Token: {props.tok}</p>
      </div>
    );
  }
  
  export default TP;