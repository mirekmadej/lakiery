import Lakier from './Lakier';
import './App.css';
import { useState } from 'react';

import czerwony from './img/czerwony.jpg';
import fioletowy from './img/fioletowy.jpg';
import zloty from './img/zloty.jpg';
import wszystkie from './img/wszystkie.jpg';
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';
import f4 from './img/f4.jpg';
import f5 from './img/f5.jpg';
import c1 from './img/c1.jpg';
import c2 from './img/c2.jpg';
import c3 from './img/c3.jpg';
import c4 from './img/c4.jpg';
import c5 from './img/c5.jpg';
import z1 from './img/z1.jpg';
import z2 from './img/z2.jpg';
import z3 from './img/z3.jpg';
import z4 from './img/z4.jpg';
import z5 from './img/z5.jpg';
const fioletoweLakiery = [
  {nr:1, "odcien":"fioletowy", nazwa:"No Risk No Story","cena":27.99,"opis":"Kolekcja jesienna", "img":f1},
  {nr:2, "odcien":"fioletowy", nazwa:"Midnight Love Story","cena":27.99,"opis":"XMAS Trend", "img":f2},
  {nr:3, "odcien":"fioletowy", nazwa:"Moony Whispers","cena":27.99,"opis":"Mój wybór - Sara Jones", "img":f3},
  {nr:4, "odcien":"fioletowy", nazwa:"Moonlight Kisses","cena":27.99,"opis":"Efekt Flash", "img":f4},
  {nr:5, "odcien":"fioletowy", nazwa:"Top Glov Violet Aurora Flakes","cena":27.99,"opis":"Oszczędzasz 33%", "img":f5},
];
const czerwoneLakiery = [
  {nr:6, "odcien":"czerwony", nazwa:"Alizee","cena":27.99,"opis":"Oszczędzasz 31%", "img":c1},
  {nr:7, "odcien":"czerwony", nazwa:"Aloha Mood","cena":27.99,"opis":"GET THE LOOK", "img":c2},
  {nr:8, "odcien":"czerwony", nazwa:"Fiery Flamenco","cena":27.99,"opis":"Mój wybór - Sara James", "img":c3},
  {nr:9, "odcien":"czerwony", nazwa:"Pure Currant","cena":27.99,"opis":"XMAS Trend", "img":c4},
  {nr:10, "odcien":"czerwony", nazwa:"Top Glow Gold","cena":27.99,"opis":"PROMOCJA", "img":c5},
];
const zloteLakiery = [
  {nr:11, "odcien":"złoty", nazwa:"Top Glow Gold","cena":27.99,"opis":"Oszczędzasz 31%", "img":c1},
  {nr:12, "odcien":"złoty", nazwa:"Sparkling Kiss","cena":27.99,"opis":"GET THE LOOK", "img":c2},
  {nr:13, "odcien":"złoty", nazwa:"g-INCREDIBLE","cena":27.99,"opis":"Mój wybór - Sara James", "img":c3},
  {nr:14, "odcien":"złoty", nazwa:"White Sparkle","cena":27.99,"opis":"XMAS Trend", "img":c4},
  {nr:15, "odcien":"złoty", nazwa:"Glow Twinkle","cena":27.99,"opis":"PROMOCJA", "img":c5},
];

function App() {
  let [ile,setIle] = useState(0);
  let kolory = zloteLakiery.concat(fioletoweLakiery).concat(czerwoneLakiery);
  let [koloryWszystkie, setKolory] = useState(kolory);
  function dodaj(e)
  {
      alert("dodano do koszyka: "+ e);
      setIle(ile+1);
  }
  function czerwonyKolor()
  {
    let p = [];
    koloryWszystkie=setKolory(p);
    koloryWszystkie=setKolory(czerwoneLakiery);
  }
  function fioletowyKolor()
  {
    let p = [];
    koloryWszystkie=setKolory(p);
    koloryWszystkie=setKolory(fioletoweLakiery);
  }  
  function zlotyKolor()
  {
    let p = [];
    koloryWszystkie=setKolory(p);
    koloryWszystkie=setKolory(zloteLakiery);
  } 
  function wszystkieKolory()
  {
    let p = [];
    koloryWszystkie=setKolory(p);
    koloryWszystkie=setKolory(zloteLakiery.concat(czerwoneLakiery).concat(fioletoweLakiery));    
  }
  return (
    <div className="App">
      <h1>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
      <h4> w koszyku: {ile} szt.</h4>
      <div className='przyciski'>
        <span >wybierz odcień <br></br></span>
        <img className='obrazek' src={fioletowy} alt="fioletowy" onClick={fioletowyKolor}/>
        <img className='obrazek' src={czerwony} alt="czerwony" onClick={czerwonyKolor}/>
        <img className='obrazek' src={zloty} alt="zloty" onClick={zlotyKolor}/>
        <img className='obrazek' src={wszystkie} alt="wszystkie kolory" onClick={wszystkieKolory}/>
      </div>
      <div className='pusty'></div>
      {
          koloryWszystkie.map((e) => 
             <Lakier key={e.nr} lakier={e} fun={()=>dodaj(e.nazwa)}/>)
        }
    </div>
  );
}

export default App;
