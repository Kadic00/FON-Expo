import '../css/login.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
function Login({ prenesiNiz }) {
    const [mejl, setMejl] = useState("");
    const [token, setToken] = useState("");
    const [kor,setKorisnik] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/prijave").then((response) => {
        setKorisnik(response.data.filter((it) => it[13]== mejl && it[17] == token)[0]);
      });
    }, [mejl,token]);
    const pregled = document.querySelector(".pregled");
    const login = document.querySelector(".login");

    const dodaj = async () => {
      if(kor == undefined) {
        alert("Pogresan email ili token!")
      }else{
        prenesiNiz(kor);
      login.classList.add("hidden");
      pregled.classList.remove("hidden");
      }
      
    }
    return (
      <div className='login hidden'>
        <h1>Pogledajte prijavu</h1>
        <input
          type="text"
          name="mejl"
          placeholder="Unesite e-mail"
          onChange={(e) => {
            setMejl(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="token"
          placeholder="Unesite token"
          onChange={(e) => {
            setToken(e.target.value);
          }}
          required
        />
        <button className='dugmeLog' onClick={() => dodaj()}>Prijavi se!</button>
      </div>
    );
  }
  
  export default Login;
  