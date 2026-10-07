import { useState, useEffect } from "react";

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);}, [corriendo]);

  return (
    <div className="cronometro">
      <h2>⏱ Cronómetro de estudio</h2>
      <h1>{segundos} segundos</h1>
      <button onClick={() => setCorriendo(true)}> Iniciar</button>
      <button onClick={() => setCorriendo(false)}>Pausar</button>
      <button onClick={() => setSegundos(0)}>Reiniciar </button>
    </div>
  );
}

export default Cronometro;