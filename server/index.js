const express = require('express');
const app = express();
const oracledb = require('oracledb');
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res) => {
    res.send("Ej");
})
app.listen(3001, ()=>{
    console.log('Aktivan port 3001');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get('/slikarstvo',(req,res) => {
    async function slikarstvo(){
        try {
        const conn = await oracledb.getConnection({
            user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
        });
        const result = await conn.execute('SELECT * from c##fpis.izlozba WHERE id_manifestacije = 1');
        return result;
    } catch (error) {
        return error;
    }
    }
    slikarstvo().then(dbRes => {console.log(dbRes);res.send(dbRes.rows);}).catch(err=>{res.send(err)})
});
app.get('/fotografije',(req,res) => {
    async function fotografije(){
        try {
        const conn = await oracledb.getConnection({
            user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
        });
        const result = await conn.execute('SELECT * from c##fpis.izlozba WHERE id_manifestacije = 2');
        return result;
    } catch (error) {
        return error;
    }
    }
    fotografije().then(dbRes => {console.log(dbRes);res.send(dbRes.rows);}).catch(err=>{res.send(err)})
});
app.get('/manifestacija',(req,res) => {
    async function manifestacija(){
        try {
        const conn = await oracledb.getConnection({
            user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
        });
        const result = await conn.execute('SELECT * from c##fpis.manifestacija');
        return result;
    } catch (error) {
        return error;
    }
    }
    manifestacija().then(dbRes => {console.log(dbRes);res.send(dbRes.rows);}).catch(err=>{res.send(err)})
});
app.get('/prijave',(req,res) => {
    async function prijava(){
        try {
        const conn = await oracledb.getConnection({
            user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
        });
        const result = await conn.execute('SELECT * from c##fpis.prijava');
        return result;
    } catch (error) {
        return error;
    }
    }
    prijava().then(dbRes => {console.log(dbRes);res.send(dbRes.rows);}).catch(err=>{res.send(err)})
});
////////////////////////Dodavanje prijave///////////////////////////
app.post('/dodajPrijavu', async (req,res) => {
    
    try {
    const conn = await oracledb.getConnection({
        user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
    });
    const ime = req.body.ime;
    const prezime = req.body.prezime;
    const profesija = req.body.profesija;
    const adresa1 = req.body.adresa1;
    const adresa2 = req.body.adresa2;
    const ptt = req.body.ptt;
    const drzava = req.body.drzava;
    const mesto = req.body.mesto;
    const email1 = req.body.email1;
    const email2 = req.body.email2;
    const promo1 = req.body.promo1;
    const promo2 = req.body.promo2;
    const broj = req.body.broj;
    const token = req.body.token;
    const cena = broj * 2000 - (broj > 2 ? (broj * 2000) * (broj * 0.01) : 0);
    const foto = req.body.foto;
    const slik = req.body.slik;
    const query = 'INSERT INTO prijava (DATUM_PRIJAVE,BROJ_LJUDI,SLIKARSTVO,FOTOGRAFIJE,IME,PREZIME,PROFESIJA,ADRESA1,ADRESA2,PTT,MESTO,DRZAVA,EMAIL,POTVRDA_EMAIL,ID_PROMO_MOJ,ID_PROMO_KORISTITI,TOKEN,CENA) VALUES (SYSDATE,:broj,:slik,:foto,:ime,:prezime,:profesija,:adresa1,:adresa2,:ptt,:mesto,:drzava,:email1,:email2,:promo1,:promo2,:token,:cena)';
    console.log('Izvršavanje INSERT upita:', query, [broj,slik,foto,ime, prezime,profesija,adresa1,adresa2,ptt,mesto,drzava,email1,email2,promo1,promo2,token,cena]);
    const result = await conn.execute(query, [broj,slik,foto,ime, prezime,profesija,adresa1,adresa2,ptt,mesto,drzava,email1,email2,promo1,promo2,token,cena], { autoCommit: true });
    console.log('Rezultat INSERT upita:', result);
    const query1 = 'INSERT INTO promo_kod (KOD,DATUM_NASTANKA,AKTIVAN) VALUES (:promo1,SYSDATE,1)';
    const result1 = await conn.execute(query1, [promo1], { autoCommit: true });
    const query2 = 'UPDATE manifestacija set broj_prijavljenih = broj_prijavljenih + :broj WHERE id_manifestacije = CASE WHEN :slik = 1 THEN 1 WHEN :slik = 0 THEN 2 END';
    const result2 = await conn.execute(query2, [broj,slik,slik], { autoCommit: true });
    res.send({ result, result1,result2 });
} catch (err) {
console.error('Greška prilikom izvršavanja INSERT upita:', err);
return res.status(500).send(err.message);
} 
})
//////////////////////////////////Pregled////////////////////////////////////
app.post('/promeniSliku', async (req,res) => {
    
    try {
     const conn = await oracledb.getConnection({
        user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
    });
    const id = req.body.id;
    const broj = req.body.broj;
    const jbro = (broj === 1 ? req.body.jbro : -1 * req.body.jbro);
    const query = 'UPDATE prijava set slikarstvo = :broj WHERE id_prijave = :id';
    console.log('Izvršavanje UPDATE upita:', query, [broj, id]);
const result = await conn.execute(query, [broj, id], { autoCommit: true });
console.log('Rezultat UPDATE upita:', result);
    const query1 = 'UPDATE manifestacija set broj_prijavljenih = broj_prijavljenih + :jbro WHERE id_manifestacije = 1';
    const result1 = await conn.execute(query1, [jbro], { autoCommit: true });
    res.send({result,result1})
} catch (err) {
console.error('Greška prilikom izvršavanja UPDATE upita:', err);
return res.status(500).send(err.message);
} 
})

app.post('/promeniFoto', async (req,res) => {
    
    try {
     const conn = await oracledb.getConnection({
        user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
    });
    const id = req.body.id;
    const broj = req.body.broj;
    const jbro = (broj === 1 ? req.body.jbro : -1 * req.body.jbro);
    
    const query = 'UPDATE prijava set fotografije = :broj WHERE id_prijave = :id';
    console.log('Izvršavanje UPDATE upita:', query, [broj, id]);
const result = await conn.execute(query, [broj, id], { autoCommit: true });
console.log('Rezultat UPDATE upita:', result);
const query1 = 'UPDATE manifestacija set broj_prijavljenih = broj_prijavljenih + :jbro WHERE id_manifestacije = 2';
const result1 = await conn.execute(query1, [jbro], { autoCommit: true });
res.send({result,result1})
} catch (err) {
console.error('Greška prilikom izvršavanja UPDATE upita:', err);
return res.status(500).send(err.message);
} 
})

app.post('/promeniBroj', async (req,res) => {
    
    try {
     const conn = await oracledb.getConnection({
        user:'c##fpis',
            password:'fpis',
            connectionString:'localhost/orcl'
    });
    const id = req.body.id;
    const broj = req.body.broj;
    const query = 'UPDATE prijava set broj_ljudi = :broj WHERE id_prijave = :id';
    console.log('Izvršavanje UPDATE upita:', query, [broj, id]);
const result = await conn.execute(query, [broj, id], { autoCommit: true });
console.log('Rezultat UPDATE upita:', result);

    res.send(result)
} catch (err) {
console.error('Greška prilikom izvršavanja UPDATE upita:', err);
return res.status(500).send(err.message);
} 
})