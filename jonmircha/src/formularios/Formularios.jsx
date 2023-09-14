import { useState } from "react";

function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");

  return (
    <>
      <h1>FORMULARIOS</h1>
      <form>
        {/** formulario INPUT */}
        <label htmlFor="nombre">nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          value={nombre}
        />{" "}
        <br />

        
        {/** INPUT CHECK LIST */}
        <label htmlFor="sabor">selecciona tu sabor:</label>
        <br />

        <label htmlFor="vainilla">vainilla</label>
        <input
          type="radio"
          name="sabor"
          id="vainilla"
          value="vainilla"
          onChange={(e) => {
            setSabor(e.target.value);
          }}
          defaultChecked
        />

        <label htmlFor="">chocolate</label>
        <input
          type="radio"
          name="sabor"
          id="chocolate"
          value="chocolate"
          onChange={(e) => {
            setSabor(e.target.value);
          }}
        />

        <label htmlFor="">dulce de leche</label>
        <input
          type="radio"
          name="sabor"
          id="dulce de leche"
          value="dulce de leche"
          onChange={(e) => {
            setSabor(e.target.value);
          }}
        />

      </form>
    </>
  );
}

export default Formularios;
