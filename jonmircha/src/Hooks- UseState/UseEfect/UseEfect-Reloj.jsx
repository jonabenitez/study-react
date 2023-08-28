/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function UseEfectReloj() {
  //1 necesito 2 variables
  // 1_ que guarde la hora actual y que tenga elset de esa hora.
  // 2_ una que cambie le estado de invisible a visible.

  const [Hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setvisible] = useState(false);

  //3 USO DEL useEfect
  //  necesito ejecutar un temporizador que pase segundo a segundo. voy a usar el useEfect porque puedo especificarle que este funcione segun el estado de un componente o variable (segunda forma), en este caso el estado [visible].
  // con esto no solo vamos a setear el estado de la hora, sino tambien cuando el estado cambie. se ejecute la fase del desmontaje con el return

  useEffect(() => {
    //declaramos la variable temporizador
    let temporizador;
    // le ponemos las condiciones.
    // si... visible es verdadero, inicia el temporizador, que se redefine como el seteador de intervalos del reloj, y le decimos que setee el estado de la hora cada 1 seg.
    // pero... si esta en falso, borralo de la ui.
    //
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      //es como el encendido y apagado del componente, ahora cuando cambie el estado de visible a falso, se apaga y desmonta el componente reloj, que es lo que me retorna este componente useefect-reloj.
      console.log("fase de desmonataje");
      clearInterval(temporizador);
    };
  }, [visible]);

    return (
      <div className="container">
        <h3>Reloj - hooks UseEfect</h3>
        <>
          {visible && <Reloj hora={Hora} />}
          <button onClick={() => setvisible(true)}>INICIAR</button>
          <button onClick={() => setvisible(false)}>DETENER</button>
        </>
      </div>
    );
}

export default UseEfectReloj;

//2 necesito un componente donde guardar esto y hacerlo visible, necesito el Reloj:
// COMPONENTE RELOJ
function Reloj({ hora }) {
  // el componente va a recibir como propiedad el estado de la hora, ya que es lo que va a mostrar.
  return <div>{hora}</div>;
}

