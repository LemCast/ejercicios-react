/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Greetings } from './Greetings';*/
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { obtenerPersonajes } from './Characters';
import './App.css'

/*function App() {
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
      <Button variant='contained' color='primary'>Click me</Button>

      <p className='pregunta'>
        ¿Está aprendiendo React?
        {isLearningReact ? " Sí" : " No"}
      </p>
    </div>
  );
}*/
type Person = {
  id: number;
  name: string;
  age?: number;
  image: string;
};


 
const people: Person[] = await obtenerPersonajes();
 
function App() {
  
 
  function viewProfile(name: string) {
    alert(`Abrir el perfil de ${name}`);
  }
 
  return (
<Stack spacing={2} sx={{ padding: 3 }}>
<h1>Perfiles</h1>
 
      {people.map((person) => (
<Stack
          key={person.id}
          direction="row"
          spacing={2}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: 2,
            alignItems: "center",
          }}
>
<Avatar src={person.image} alt={person.name} />
 
          <div>
<strong>{person.name}</strong>
 
            {person.age !== undefined && (
<p>Edad: {person.age}</p>
            )}
</div>
 
          <Button
            variant="outlined"
            onClick={() => viewProfile(person.name)}
>
            Ver perfil
</Button>
</Stack>
      ))}
</Stack>
  );
}

export default App;