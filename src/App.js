import Lakier from './Lakier';
import './App.css';

import czerwony from './img/czerwony.jpg';
import fioletowy from './img/fioletowy.jpg';
import zloty from './img/zloty.jpg';
import wszystkie from './img/wszystkie.jpg';
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';
import f4 from './img/f4.jpg';
import f5 from './img/f5.jpg';
const lakiery = [
  {nr:1, "odcien":"fioletowy", nazwa:"No Risk No Story","cena":27.99,"opis":"Kolekcja jesienna", "img":f1},
  {nr:2, "odcien":"fioletowy", nazwa:"Midnight Love Story","cena":27.99,"opis":"XMAS Trend", "img":f2},
  {nr:3, "odcien":"fioletowy", nazwa:"Moony Whispers","cena":27.99,"opis":"Mój wybór - Sara Jones", "img":f3},
  {nr:4, "odcien":"fioletowy", nazwa:"Moonlight Kisses","cena":27.99,"opis":"Efekt Flash", "img":f4},
  {nr:5, "odcien":"fioletowy", nazwa:"Top Glov Violet Aurora Flakes","cena":27.99,"opis":"Oszczędzasz 33%", "img":f5},

];

function App() {
  function czerwonyKolor()
  {}
  return (
    <div className="App">
      <h1>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
      
      <div className='przyciski'>
        <span >wybierz odcień <br></br></span>
        <img className='obrazek' src={fioletowy} alt="fioletowy" onClick={czerwonyKolor}/>
        <img className='obrazek' src={czerwony} alt="czerwony" />
        <img className='obrazek' src={zloty} alt="zloty" />
        <img className='obrazek' src={wszystkie} alt="wszystkie kolory" />
      </div>
      <div className='pusty'></div>
      {lakiery.map((e)=><Lakier key={e.nr} lakier={e} />)}
    </div>
  );
}

export default App;
