import { useState, useEffect } from "react";

function Fecha(){
  const [fecha, setFecha] = useState(new Date()); //guardamos la fecha como estado
  useEffect(() => {
    const reloj = setInterval(() => {
      setFecha(new Date());
    }, 1000);
  
    return () => clearInterval(reloj); //limpia el reloj cuando se cierra la pag.
  }, []);


  return(
    <div className="fecha">
      <h2>📅 Fecha y hora</h2>
      <p>{fecha.toLocaleDateString()}</p>
      <p>🕒 {fecha.toLocaleTimeString()}</p>
    </div>
  );
}

export default Fecha;