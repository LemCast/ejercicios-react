import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Greetings } from './Greetings';
import './App.css'

function App() {
  const name: string = "Aaron";
  const name2: string = "Josue";
  const age: number = 27;
  const isLearningReact: boolean = true;
  const ciudad: string = "Monterrey";
  const ciudad2: string = "Valentin";
  const pasatiempo: string = "Leer";
  const bestie: string = "Valentina";

  function greet(personName: string, personAge: number): string {
    return `Hola, soy ${personName} y tengo ${personAge} años.`;
  }

  function hobbies(pastime: string, bestie: string, city: string): string {
    return `Mi pasatiempo es ${pastime} y mi mejor amiga es ${bestie}. Vivo en ${ciudad}`;
  }

  return (
    <div>
      <h1>{greet(name, age, ciudad)}</h1>
      <h2>{hobbies(pasatiempo, bestie)}</h2>
      <Greetings name={name2} ciudad={ciudad2} edad={age} bestie={bestie} pasatiempo={pasatiempo}/>

      <p className='pregunta'>
        ¿Está aprendiendo React?
        {isLearningReact ? " Sí" : " No"}
      </p>
    </div>
  );
}

export default App;