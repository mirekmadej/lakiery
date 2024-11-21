import './Lakier.css';

function Lakier(props)
{
    return(
        <div className='lakier'>
            <div className='obraz'>
                <img src={props.lakier.img} alt={props.lakier.nazwa} />
            </div>
            <div className='opis'>
                <h3>{props.lakier.nazwa}</h3>
                <p>odcień: {props.lakier.odcien}</p>
                <h4>Cena {props.lakier.cena} zł</h4>
                <p className='reklama'>{props.lakier.opis}</p>
                <button>Dodaj do koszyka</button>
            </div>
            <div className='pusty'></div>
        </div>

    );   
};

export default Lakier;