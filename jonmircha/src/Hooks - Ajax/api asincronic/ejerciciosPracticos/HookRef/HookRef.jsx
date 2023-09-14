// ESTAS NOS PERMITEN CONTROLAR UN ELEMENTO QUE YA FUERON CARGADOS AL DOM
// UN EJEMPLO ES EL MENU HAMBURGESA PARA QUE SE ABRA Y SE CIERRE, NO USAMOS VARIABLES DE ESTADOS, YA QUE ESTAS GENERAN REENDERIZADO DE LA UI, Y COMO ESTE YA ESTA CARGADO EN EL DOM, NO TIENE SENTIDO YA QUE CONSUME MEMORIA, PODEMOS USAR EL DISPLAY NONE O D.BLOCK CON CSS.

// CON ESTAS PODEMOS SELECCIONAR UNA REFENCIA DE UN ELEMENTO DEL DOM Y PODER UTILIZARLO.
//CUANDO USARLAS:
// FOCO DE UN BOTON.
// SELECCION DE TEXTO
// ACTIVAR O DESCTIVAR ANIMACIONES EJ. ANIMACION MODALES.

// COMO SE USAN LAS REFERNCIAS /////////////////
// creamos un menu hamburgesa, mostrando y ocultando los link a y cambiando el contenido del boton.

//1) creamos el onClick Habdle y la function de este Handle dentro de referencias.
//2) buscamos en que basarnos en que cambio basarnos para generar este camnio de estado, en que evento.
// usamos el e.target que corresponde al boton (porque tiene el evento onclick), cuando se genere este evento, que pase el switcheo.

// CON VANILLA JS..////
// export default function Referencias() {
//   const HandleTogleMenu = (e) => {
//     let menu = document.getElementById("menu");
//     if (e.target.textContent === "Menu") {
//       e.target.textContent = "Cerrar";
//       menu.style.display = "block";
//     } else {
//       e.target.textContent = "Menu";
//       menu.style.display = "none";
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Referencias</h2>
//       <button onClick={HandleTogleMenu} id="menu-btn">
//         Menu
//       </button>
//       <nav id="menu">
//         <a href="#">Section 1</a> <br />
//         <a href="#">Section 2</a> <br />
//         <a href="#">Section 3</a> <br />
//         <a href="#">Section 4</a> <br />
//         <a href="#">Section 5</a> <br />
//       </nav>
//     </div>
//   );
// }

// la documentacion nos dice que no usemos los getElement. para esto esta este HOOK

//          HOOKS- USEREF       ///
import { useRef } from "react";

// los pasos logicos son los mismo, se crea el boton con el onclick y el handle manejador
// creo la handle, que va a recibir como porametro el evento del onclick.
// creo las REFERENCIAS, las cuales vana  seleccion el componente de la ui que necesito.
// son selectores de elementos del dom, dentro de react

export default function Referencias() {
  // refererencias
  let refMenuBtn = useRef();
  let refMenu = useRef();

  //  console.log(refMenuBtn)
  // esta referencia en si en un objeto que tiene un valor que es current, dentro de el se encuentra el componente del dom que vamos a utilizar.
  let HandleTogleMenu = () => {
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Rereferencias- menu hamburgesa</h2>
      {/* boton con onclick y su handle correspondiente */}
      <button type="button" ref={refMenuBtn} onClick={HandleTogleMenu}>
        Menu
      </button>
      {/* lista li */}
      <nav ref={refMenu}>
        <a href="#">Section1</a>
        <br />
        <a href="#">Section2</a>
        <br />
        <a href="#">Section3</a>
        <br />
        <a href="#">Section4</a>
        <br />
        <a href="#">Section5</a>
        <br />
      </nav>
    </div>
  );
}
