import { useEffect, useState } from "react";
import RelojPractica from './RelojPractica'

function UseEfectRelojPractica() {
  //TEMPORIZADOR
  //A. DECLARO VARIABLES.
  //1. GUARDE EL TIEMPO.
  const [Tiempo, setTiempo] = useState(new Date().toLocaleTimeString());
  //2 LA QUE HACE QUE SEA O NO VISIBLE.
  const [Visible, setVisible] = useState(false);

  // al ya tener las variables ahora tengo que hacer que este reloj vaya actualizandose segundo a segundo, siempre y cuando sea visible...

  // USE EFECT = CON CONDICIONAL
  // dentro del use efect creamos el temporizador
  // le agregamos el intervalo de tiempo que queremos que se actualice
  useEffect(() => {
    let temporizador;
    if (Visible) {
      temporizador = setInterval(() => {
        setTiempo(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return ()=> {
      console.log('componente apagado/encendido')
      clearInterval(temporizador)
    }

  }, [Visible]);

  
  return (
    <div className="container">
      <h3>Reloj - hooks UseEfect</h3>
      <>
      {/**PARA PODER HACER VISIBLE ESTO DEL TIEMPO TENGO 2 FORMAS, 
       * LA PRIMERA ES CONDICIONAR SI ES TRUE, QUE ME RETORNE EL ESTADO DEL Tiempo, pero no es muy correcto
       * LA SEGUNDA ES CONDICIONAR SI ES TRUE, Y CREAR UN OBJETO LLAMADO RelojPractica, CREADO EN OTRA PARTE (abajo en este caso) QUE LE PASAMOS COMO PROPIEDAD ESTA VARIABLE TIEMPO, AHORA LLAMADA hora.
       * DENTRO DEL OBJETO TIEMPO ESPECIFICAMOS QUE RECIBE ESTA PROPIEDAD Y QUE LA RETORNE DENTRO DE UN DIV A ESTE ESTADO
       *  hora ===> Tiempo en el fondo hora es la variable tiempo, guardada en una props, puesta en el objeto tiempo
       */}
      {Visible && Tiempo}
        {Visible && <RelojPractica hora={Tiempo} />}
        <button onClick={() => setVisible(true)}>INICIAR</button>
        <button onClick={() => setVisible(false)}>DETENER</button>
      </>
    </div>
  );
}

export default UseEfectRelojPractica;

