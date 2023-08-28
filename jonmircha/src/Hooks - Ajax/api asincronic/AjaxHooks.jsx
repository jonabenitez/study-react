/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

//COMPONENTE POKEMON
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
      let res = await fetch(url);
    //b) esta res, la convierto en json
      let json = await res.json();

    //2) al json entro a results y hago el forEach, donde hago otra peticion para obtener el avatar, que la convierto a asincrona.
      json.results.forEach(async (el) => {

    //a) obtengo la respuesta de la url  
        let res = await fetch(el.url);
    //b) la res la convierto a json
        let json = await res.json();
    //3) y creo las props que le voy a pasar a los pokemones  
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
    //4) dentro del buqle seteo la pokebola con la funcion flecha, agregando lo que ya tenia
        setPokebola((Pokebola) => [...Pokebola, pokemon]);
      });
    };


    // URL COMO PARAMETRO
    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);
   // Agregamos un arreglo vacío como segundo argumento para que el efecto se ejecute solo una vez al montar el componente



  return (
    <>
      <h2>Peticiones Asincrónicas en Hooks</h2>
      {Pokebola.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        Pokebola.map((element) => (
          <Pokemon
            key={element.id}
            name={element.name}
            avatar={element.avatar}
            id={element.id}
          />
        ))
      )}
    </>
  );
}

export default AjaxHooks;
