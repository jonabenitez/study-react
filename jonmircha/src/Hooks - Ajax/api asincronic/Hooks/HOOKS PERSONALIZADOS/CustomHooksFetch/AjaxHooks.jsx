/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

//COMPONENTE POKEMON - lo ideal es un componente externo
export function Pokemon({ avatar, name, id }) {
  return (
    <figure>
      <h1>{id}</h1>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

// function AjaxHooks() {
//   let url = "https://pokeapi.co/api/v2/pokemon";
//   const [Pokebola, setPokebola] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())

//       //creacion del pokemon
//       .then((json) => {
//         json.results.forEach((el) =>
//           fetch(el.url)
//             .then((res) => res.json())

//             .then((json) => {
//               let pokemon = {
//                 id: json.id,
//                 name: json.name,
//                 avatar: json.sprites.front_default,
//               };

//               //SETEAR POKEBOLA:
//               // la forma de hacerlo es con arrowFunction. donde dentro del parametro va lo que vamos a llenar y en la flecha la copia de lo que se va llenanado porque es un buqle y lo nuevo que le agregamos
//               setPokebola((Pokebola) => [...Pokebola, pokemon]);
//             })
//         );
//       });
//   }, []);

//REFACTORIZACION DEL CODIGO = ASYNC FETCH AWAIT
// AL USEEFECT NO SE VUELVE ASINCRONO, SI NECESITAMOS USAR UNA FUNCION ASINCRONA DENTRO DE UN USE EFECT, USAMOS LO SIGUIENTE.

function AjaxHooks() {
  const [Pokebola, setPokebola] = useState([]);

  useEffect(() => {
    //CREAMOS LA FUNCION ASYNCRONA
    const getPokemons = async (url) => {
      //a) uso la url que le pase como parametro abajo y hago la peticion, guardandola en res
      //b) esta res, la convierto en json
      //2) al json entro a results y hago el forEach, donde hago otra peticion para obtener el avatar, que la convierto a asincrona.
      let res = await fetch(url);
      let json = await res.json();
      // BUCLE DONDE SE HACE LA 2DA PETICION donde obtengo los id, anme y el avatar.
      json.results.forEach(async (el) => {
        //a) obtengo la respuesta de la url
        let res = await fetch(el.url);
        //b) la res la convierto a json
        let json = await res.json();

        //3) y creo las props que va a ir llenando a los pokemones
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        //4) dentro del buqle seteo la pokebola con la funcion flecha, agregando lo que ya tenia
        setPokebola((Pokebola) => [...Pokebola, pokemon]);
      });
    };

    // URl se la paso como parametro a la funcion async, se ejectuta el get pokemon con esta url como parametro, esta direccion es el url de arriba
    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);
  // Agregamos un arreglo vacío como segundo argumento para que el efecto se ejecute solo una vez al montar el componente

  return (
    <>
      {/* PINTADA DEL COMPONENTE EN LA INTERFAZ */}
      <h2>Peticiones Asincrónicas en Hooks</h2>
      {/* SI NO HAY NADA CARGADO QUE ME PINTE UN CARGANDO */}

      {/*SINO QUE HAGA UN MAPEO DE LA POKEBOLA Y ME DEVUELVA EL POKEMON CON LO QUE QUIERO MOSTRAR  */}
      {Pokebola.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        Pokebola.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
            id={pokemon.id}
          />
        ))
      )}
    </>
  );
}

export default AjaxHooks;
