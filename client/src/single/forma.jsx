import '../css/forma.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import TP from './tokipromo';
function Forma({izvor}) {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [profesija, setProfesija] = useState("");
  const [adresa1, setAdresa1] = useState("");
  const [adresa2, setAdresa2] = useState("");
  const [ptt, setPtt] = useState(0);
  const [drzava, setDrzava] = useState("");
  const [mesto, setMesto] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [promo, setPromo] = useState("");
  const [osobe, setOsobe] = useState();
  const [token,setToken] = useState("");
  const [promogen,setPromogen] = useState("");
  const [slikar,setSlik] = useState(0);
  const [fotog,setFoto] = useState(0);
  const[toki, setToki] = useState();
  const[mestoSlika,setMestoSlik] = useState(0);
  const[mestoFoto,setMestoFoto] = useState(0);
  const[racun,setRacun] = useState(0);
  const randomString = function (){
    return new Promise((resolve) => {
    const slova = 'abcdefghijklmnopqrstuvwxyz';
    const vaslo = 'icwefghqjklazodrsbptuvxmy';
    let to = '';
    let prom = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * slova.length);
      to += slova.charAt(randomIndex);
    }
    for (let i = 0; i < 6; i++) {
      const randomIndex2 = Math.floor(Math.random() * vaslo.length);
      prom += vaslo.charAt(randomIndex2);
    }
    setToken(to);
    setPromogen(prom);
    resolve({to,prom});
    
  });
}
  useEffect(() => {
    setToki(document.querySelector(".tokipromo"));
  },[])
  const closeModal = function () {
    toki.classList.remove("hidden");
  };
  useEffect(() => {
    if (izvor == 1) {
      setSlik(1);
      setFoto(0);
      setRacun(15 - mestoSlika);
    }else{
      setFoto(1);
      setRacun(15 - mestoFoto);
    }
  }, [izvor]);
  
  const dodaj = async () => {
    const { to, prom } = await randomString();
    Axios.post("http://localhost:3001/dodajPrijavu", {
      ime: ime,
      prezime: prezime,
      profesija:profesija,
      adresa1: adresa1,
      adresa2:adresa2,
      ptt: parseInt(ptt,10),
      drzava: drzava,
      mesto:mesto,
      email1: email,
      email2:email2,
      promo1:prom,
      promo2:promo,
      token:to,
      foto:fotog,
      slik:slikar,
      broj:parseInt(osobe,10),

    })
      .then((response) => {
        console.log('Odgovor od servera nakon dodavanja:', response.data);
        alert("Prijava je dodata!");
      })
      .catch((error) => {
        console.error('Greška prilikom slanja zahteva:', error);
      });
  };
 
  useEffect(() => {
    Axios.get("http://localhost:3001/manifestacija").then((response) => {
      setMestoFoto(response.data[1][2]);
      setMestoSlik(response.data[0][2]);
    });
  }, []);
  const opcije = () => {
    const opcije = [];
    for (let i = 0; i < racun; i++) {
      opcije.push(
        <option value={i + 1}>
          Za nas {i + 1}!
        </option>
      );
    }
    return opcije;
  };


  const provera = function(){
    if(ime != "" && prezime != "" && adresa1 != "" && ptt !== 0 && mesto != "" && drzava != "" && email != "" && email2 != "" && (email == email2)){
      dodaj();
      closeModal();
    }else{
      alert("Popunite sva polja i proverite potvrdu EMAIL-a!")
    }
  }
    return (
      <div className='forma hidden'>
        <h1>Prijava</h1>
        <input
          type="text"
          name="ime"
          placeholder="Ime *"
          onChange={(e) => {
            setIme(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="prezime"
          placeholder="Prezime *"
          onChange={(e) => {
            setPrezime(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="profesija"
          placeholder="Profesija"
          onChange={(e) => {
            setProfesija(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="adresa1"
          placeholder="Adresa 1 *"
          onChange={(e) => {
            setAdresa1(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="adresa2"
          placeholder="Adresa 2"
          onChange={(e) => {
            setAdresa2(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="ptt"
          placeholder="Postanski broj *"
          onChange={(e) => {
            setPtt(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="drzava"
          placeholder="Drzava *"
          onChange={(e) => {
            setDrzava(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="mesto"
          placeholder="Mesto *"
          onChange={(e) => {
            setMesto(e.target.value);
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="email"
          name="email2"
          placeholder=" Potvrdi Email *"
          onChange={(e) => {
            setEmail2(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="promo"
          placeholder=" Promo kod za dodatni popust!"
          onChange={(e) => {
            setPromo(e.target.value);
          }}
          required
        />
        <select
          onChange={(e) => {
            const nas = e.target.value;
            setOsobe(nas);
          }}
        >
          {racun > 4 ? (<>
          <option value="1">Samo za mene.</option>
          <option value="2">Za nas dvoje!</option>
          <option value="3">Za nas troje!</option>
          <option value="4">Za nas cetvoro!</option>
          <option value="5">Za nas petoro!</option></>) : (
            opcije()
          )}
          
        </select>
        <button className="prijava-btn" onClick={() => { provera();}}>
            Prijavi se!
          </button>
        <TP 
        tok = {token}
        promo = {promogen}/>
      </div>
    );
  }
  
  export default Forma;