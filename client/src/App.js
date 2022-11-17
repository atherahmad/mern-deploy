import logo from './logo.svg';
import React, {useEffect, useState} from "react"
import './App.css';
import axios from "axios"

function App() {

  const [movies, setMovies] = useState([])
  
  useEffect(()=>{
    axios.get("https://mern-app-s3o5.onrender.com/getmovies")
    .then(res => setMovies(res.data.movies))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">

    full stack deployment as a singl APP on Heroku
    {
      movies.map(item => <div>{item}</div>)
    }
      </header>
    </div>
  );
}

export default App;
