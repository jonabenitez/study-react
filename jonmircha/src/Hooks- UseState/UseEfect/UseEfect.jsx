import { useEffect, useState } from "react";

// SCROLL HOOK

function UseEfect() {
  // funcion de scroll - la creamos dentro del use Efect, para que este escuchando continuamente el scroll de la pantalla
  const [Movy, setMovy] = useState();

  //  FASE DE MONATAJE - componentDidMout()

  //1 mas usada - que se ejecute unica vez.
  useEffect(() => {
    console.log("fase de MONTAJE una unica vez");
  }, []);
  //2 que se ejecute cuando un estado determinado cambie.
  useEffect(() => {
    console.log("fase de MONTAJE me ejecuto en base a un cambio de estado");
  }, [Movy]);

  //FASE DE ACTUALIZACION - componentDIdUpdate()
  useEffect(() => {
    console.log(
      "fase de ACTUALIZACION - me ejecuto cada vez que se reenderice"
    );
    let detectarScroll = () => {
      setMovy(window.scrollY);
    };
    // determinamos la funcion que va a detectar la posicion del scroll en la pantalla
    window.addEventListener("scroll", detectarScroll);
  });


  //FASE DE DESMONAJTE - componentWillUnmount()
  //al especificar que retorna una funcion, js entiende que es la fase de desmonaje
  const [ScrollYDesmontaje, setScrollYDesmontaje] = useState();

  useEffect(() => {
    console.log("fase de  DESMONATAJE");
    let detectarScrollDesmontaje = () => {
      setScrollYDesmontaje(window.scrollY);
    };
  window.removeEventListener('scroll', detectarScrollDesmontaje)
;
  });

  return (
    <div>
      <h3>useEfect y Ciclo de vida</h3>
      <p>scroll Y del navegador {Movy}</p>
      <p>scroll desmontaje {ScrollYDesmontaje}</p>
    </div>
  );
}

export default UseEfect;
