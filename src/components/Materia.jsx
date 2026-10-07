import Tema from "./Tema";

function Materia(props) { //funcion que devuelve HTML
  return ( //todo lo que se vea en la pantalla
    <div className="materia">
      <h2>📚 {props.nombre}</h2>  
      <button onClick={() => props.eliminar(props.nombre)}>🗑️</button>
      {//enviar datos
        props.temas.map((tema) => ( //react recorre
          <Tema
            key={tema}
            nombre={tema}
            />
        ))
      }
    </div> // contenedor (elemento padre)
  ); // props: Traeme el valor de nombre que me mandó el padre
}

export default Materia; // exportar