import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Nav from './nav';
import { Alert } from 'reactstrap';

export default function App() {

  const [listapokemon,setlistapokemon] = useState([])

  useEffect( ()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      console.log(res.data.results)
      setlistapokemon(res.data.results)
    })
    .catch(() => {
      console.error("Deu Erro!")
    })
    },[])

  return (
    <div>
      <Nav />
      <div className="App">
      <br />
        <div className="cardE">
      {listapokemon.map((pokemon) => (
        <Alert color="primary">
        {pokemon.name}
        </Alert>
        ))}
      </div>
      <br />
        </div>
    </div>
  )
}