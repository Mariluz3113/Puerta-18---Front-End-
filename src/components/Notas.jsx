import { useState } from "react";

function Notas(){
    const [texto, setTexto] = useState(
  localStorage.getItem("notas") || ""
);

  return(
    <div className="notas">
      <h2>📝 Notas</h2>
      <textarea
        placeholder="Escribí tus notas..."
        value={texto}
        onChange={(e)=>{
        setTexto(e.target.value);
        localStorage.setItem( "notas",
          e.target.value
        );
        }} //React guarda lo que escribís.
      />
    </div>
  );
}

export default Notas;