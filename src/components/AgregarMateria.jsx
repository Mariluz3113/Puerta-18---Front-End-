import { useState } from "react"; 

function AgregarMateria({ agregar }) { //capturar datos ingresados por el usuario
  const [nombre, setNombre] = useState("");
  const [temas, setTemas] = useState("");

  function guardarMateria(){
    const nueva = {
      nombre: nombre,
      temas: temas.split(",")
    };
    agregar(nueva);

    setNombre("");
    setTemas("");
  }

  return (
    <div>
      <h2>➕ Agregar materia</h2>
      <input
        placeholder="Nombre de la materia"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />

      <input
        placeholder="Temas separados por coma"
        value={temas}
        onChange={(e)=>setTemas(e.target.value)}
      />

      <button onClick={guardarMateria}>Guardar</button>
    </div>
  );
}

export default AgregarMateria;