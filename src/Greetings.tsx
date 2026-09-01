type GreetingsProps = {
    name : string;
    ciudad: string;
    edad: number;
    bestie: string;
    pasatiempo:string;
}

export function Greetings({name, ciudad, edad, bestie, pasatiempo}: GreetingsProps) {
  return (
    <div>
      <h1>Hola, mi nombre es {name}</h1>
      <h1>Vivo en {ciudad}</h1>
      <h1>Tengo {edad} años</h1>
      <h1>Mi mejor amigo es {bestie}</h1>
      <h1>Me gusta {pasatiempo}</h1>
    </div>
  )
}