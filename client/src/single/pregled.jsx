import '../css/proba.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
function Pregled({ zni }) {
    const [foto,setFoto] = useState();
    const [slika,setSlika] = useState();
    const [rez,setRez] = useState();
    const [osobe,setOsobe] = useState(1);
    useEffect(() => {
        Axios.get("http://localhost:3001/manifestacija").then((response) => {
          setSlika(response.data[0][2]);
          setFoto(response.data[1][2]);
        });
        if(zni[3] === 1 && zni[4] === 0){
            setRez(slika);
        }else if(zni[3] === 0 && zni[4] === 1){
            setRez(foto);
        }else{
            setRez(slika >= foto ? slika : foto);
        }
      }, [zni[2]]);
      
      const promeniOsobe = async() => {
        
        Axios.post("http://localhost:3001/promeniBroj",{
        id : zni[0],
        broj: parseInt(osobe,10)
        }).then((response) => {
        console.log('Odgovor od servera nakon promene:', response.data);
        alert("Prijava Slikarstva je promenjena!");
        window.location.reload()
      })
      .catch((error) => {
        console.error('Greška prilikom slanja zahteva:', error);
      });
    };
      const promeniSliku = async() => {
        Axios.post("http://localhost:3001/promeniSliku",{
        id : zni[0],
        broj: Number(!zni[3]),
        jbro: Number(zni[2])
        }).then((response) => {
        console.log('Odgovor od servera nakon promene:', response.data);
        alert("Prijava Slikarstva je promenjena!");
        window.location.reload()
      })
      .catch((error) => {
        console.error('Greška prilikom slanja zahteva:', error);
      });
      };
      const promeniFoto = async() => {
        Axios.post("http://localhost:3001/promeniFoto",{
        id : zni[0],
        broj: Number(!zni[4]),
        jbro: zni[2]
        }).then((response) => {
        console.log('Odgovor od servera nakon promene:', response.data);
        alert("Prijava Fotografije je promenjena!");
        window.location.reload()
      })
      .catch((error) => {
        console.error('Greška prilikom slanja zahteva:', error);
      });
      };
      const opcije = () => {
        const opcije = [];
        for (let i = 0; i < ((15 - rez) + zni[2] >= 5 ? 5 : zni[2] + (15 - rez)); i++) {
          opcije.push(
            <option value={i + 1}>
              Za nas {i + 1}!
            </option>
          );
        }
        return opcije;
      };
    return(
        <div className='pregled hidden'>
            <p>{zni[5]} {zni[6]}</p>
            <p>Email: {zni[13]}</p>
            <p>Broj ljudi:{zni[2]}-Promeni broj:<select
          onChange={(e) => {
            const nas = e.target.value;
            setOsobe(nas);
            
          }} >
            {opcije()}
            </select><button className='selectBtn' onClick={() => promeniOsobe()}>Promeni</button></p>
            <p className={zni[3] == 1 ? 'zeleno' : 'crveno'}>Slikarstvo <button onClick={() => promeniSliku()}>Promeni</button></p>
            <p className={zni[4] == 1 ? 'zeleno' : 'crveno'}>Fotografija <button onClick={() => promeniFoto()}>Promeni</button></p>
            <p>Cena: {zni[18]} rsd</p>
        </div>
    )
}
  
export default Pregled;