# FON-Expo

Projektni zadatak – Aplikacija za Kulturnu Manifestaciju "FON Expo 2024"
Feature 1. Informacije o manifestaciji
Prva strana - Osnovne informacije o manifestaciji (Naziv manifestacije, Grad, Lokacija održavanja, Datumi održavanja, dodatne informacije).
2 dana manifestacije, 1. dan Slikarstvo, 2. dan Fotografija. Grid izložbi po danima, sa vremenima otvaranja i zatvaranja izložbi i umetnicima (npr. 1. dan, subota, 15. maj, Slikarstvo dan).
Broj slobodnih mesta za posetioce (Count iz baze).
Zadati maksimalni broj posetilaca za oba dana (trebalo bi da to bude isti broj).
Feature 2. Prijava na manifestaciju Prijava na manifestaciju za Fotografiju, za Slikarstvo ili za oba dana. 2.1. Osnovni podaci (precizno pobrojati atribute: Ime*, Prezime*, Profesija, Adresa1*, Adresa2, Poštanski broj*, Mesto*, Država*, Email*, Potvrda email adrese*)
2.2. Cena1 za Slikarstvo, Cena2 za Fotografiju, (Cena1 + Cena2)\*0.9 za oba dana
2.3. Umanjenje cene za 10% na C1 i 10% na C2 do proizvoljno zadatog datuma.
2.4. Prvi put se dobija token za kasniji pristup – random string kao identifikator prijave.
2.5. Generisanje promo koda koji može iskoristiti prijatelj i time ostvariti dodatnih 5% popusta.
Prilikom prijave unos promo koda je opcioni. Nakon kreiranja prijave generiše se novi promo kod.
Kada neko iskoristi promo kod, zabeležiti promenu statusa.
2.6. Prijava može biti grupna – čuvati samo broj osoba. Od broja osoba zavisi I konačni popust (3 osobe – 3% popusta, 5 osoba – 5% popusta). Paziti na maksimalan broj posetilaca po danu.
Feature 3. Izmena prijave
Unosom email-a I tokena korisnik moze pristupiti svojoj prijavi i izmeniti je.
3.1. Dodavanje dana (1+1) – ako ima slobodnih mesta, obračunati cenu I popuste.
3.2. Oduzimanje dana (2-1) – smanjiti zaduženje korisnika, vodeći računa o popustima.
3.3. Izmena broja osoba – ako ima slobodnih mesta, obračunati cenu I popuste.
Feature 4. Otkazivanje prijave
Prilikom otkazivanja unosi se token prijave i emaila.
Otkazivanje prijave - token je trajno pasivan (ne moze se obnoviti otkazana prijava sa istim tokenom već se mora napraviti nova).
Promo-kod otkazane prijave postaje nevažeći. Ako je već iskorišćen nije bitno, ne menjati mu status.
Napomena: Ignorisati aspekt plaćanja, zabeležiti ukupno dugovanje po posetiocu sa specifikacijom stavki i obračunom popusta. Nije potrebno implementirati autentifikaciju korisnika. Pristup svojim rezervacijama korisnik vrši pojedinačno korišćenjem email-a I tokena rezervacije.
