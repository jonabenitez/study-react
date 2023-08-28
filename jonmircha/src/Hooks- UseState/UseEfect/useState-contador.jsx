import { useState } from "react";

// EJEMPLO DE CONTADOR use State

Contador.defaultProps = {
  tituloDefault: "soy un titulo x default",
};

function Contador(props) {
  const [Contador, setContador] = useState(0);

  let sumar = () => {
    setContador(Contador + 1);
  };

  let restar = () => {
    setContador(Contador - 1);
  };

  return (
    <div className="container">
    <>
      <h3>hooks - useState</h3>
      <h3> {props.titulo}</h3>
      <h3>{props.tituloDefault}</h3>
      <h3>{Contador}</h3>

      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </>
    </div>
  );
}

export default Contador;
