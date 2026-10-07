import { useState } from "react"; //crear variable, contenido cambiar
import "./App.css";

import Header from "./components/Header";
import Cronometro from "./components/cronometro";
import Fecha from "./components/Fecha";
import Notas from "./components/Notas"; // traer componente
import Materia from "./components/Materia";
import AgregarMateria from "./components/AgregarMateria";


function App() {
  const [materias, setMaterias] = useState( //vacio, modificar
    JSON.parse(localStorage.getItem("materias")) || []
  );

  function agregarMateria(nuevaMateria) { //recibe una materia nueva y agregala a la lista general de materias
    const nuevasMaterias = [
      ...materias,
      nuevaMateria
    ];

    setMaterias(nuevasMaterias);
    localStorage.setItem(
      "materias",
      JSON.stringify(nuevasMaterias)
    );
  }

  function eliminarMateria(nombreMateria) {
    const materiasActualizadas = materias.filter(
      (materia) => materia.nombre !== nombreMateria
    );

    setMaterias(materiasActualizadas);
    localStorage.setItem(
      "materias",
      JSON.stringify(materiasActualizadas)
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="fila-superior">
        <Cronometro />
        <Fecha />
        <Notas />
      </div>

      <AgregarMateria agregar={agregarMateria}/> 

      <div className="contenedor-materias"> 
        {materias.map((materia) => ( //lee el estado actual
          <Materia
            key={materia.nombre}
            nombre={materia.nombre}
            temas={materia.temas}
            eliminar={eliminarMateria}
          />
          ))
        }
      </div>
    </div>
  );
}


export default App;