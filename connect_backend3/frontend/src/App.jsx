import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
 const [jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get('htpp://localhost:3000/jokes')
    .then((response) =>
    {
      setJokes(response.data);
    }
  ).catch((error)=>
  {
    console.log(error);
  })
  })

  return (
  <>
    <h1>Chai and full stack</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })
    }
  </>
);

}

export default App
