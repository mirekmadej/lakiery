import Lakier from './Lakier';
import './App.css';

import f1 from './img/f1.png';

const lakiery = [
  {nr:1, "odcien":"fioletowy", nazwa:"No Risk No Story","cena":27.99,"opis":"Oszczędzasz 33%", "img":f1},

];

function App() {
  return (
    <div className="App">
      <h1>NEONAIL</h1>
      <Lakier lakier={lakiery[0]} />
    </div>
  );
}

export default App;
