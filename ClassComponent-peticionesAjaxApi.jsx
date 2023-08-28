/* eslint-disable react/prop-types */
import { Component } from "react";
import { Pokemon } from "./pokemon";

export default class AjaxAPis extends Component {
  state = {
    pokebola: [],
  };

  //.......PETCION A LA API = COMO REALIZAR LA PETICION A LA API ..........//

  // (1) SE HACE EN EL DIDMOUNT
    componentDidMount() {
      //  (2) DEFINIMOS LA VARIABLE CON LA URL DE LA API
      let url = "https://pokeapi.co/api/v2/pokemon";
      //   (3) SE HACE LA PETICION A LA URL CON FETCH - 3 PASOS. PETICION/CONVERSION/EJECUCION.
      fetch(url)
        //   3.A) la respuesta la convierto a json.
        .then((res) => res.json())
        //  3.B) la respuesta se va a ejecutar en codigo json.
        .then((json) => {
          //3.C)
          //ME TRAE UN OBJETO, DONDE CONTIENE UNA PROPS LLAMADA RESULTS, QUE AHI SE ENCUENTRAN LOS 20 POKEMONES.
          // results > 0: --> name:bulbaur / url:url.img
          //entonces para esto entramos al results y con el FOREACH le pedimos que entre a cada elemento del array, este elemento se encuentra conformado por el name y la url, le pedimos que haga esta segunda peticion a esta url.

          json.results.forEach((element) => {
            fetch(element.url)
              .then((res) => res.json())
              .then((json) => {
                // SEGUNDA PETICION       
                // element-> name:volvasor / url: con la url q te lleva a la prop de la img
                // (1) entra a cada elemento, entra a su url.
                // (2) CONVERTILO A JSON.
                // RESULTADO DE LA 2DA PETICION.
                // (3) EL JSON AHORA CONTIENE LO QUE CONTIENE LA 2DA URL, QUE SE LO VOY A ASIGNAR A ESTE OBJETO PARA CREAR MI POKEMON.

                //....CREACION DEL POKEMON....//
                let pokemon = {
                  id: json.id,
                  name: json.name,
                  avatar: json.sprites.front_default,
                };
                console.log(pokemon)
                //  (4) //... ASIGNACION DE LOS POKEMONES AL ARRAY DE POKEMONS..//
                // USE DEL SPREAD OPERATION:
                // (1) defino la varible con el mismo nombre que lo defini al state de mi clase pokemons.
                let pokebola = [...this.state.pokebola, pokemon];
                //IMPORTANTE:
                // (2) a esta variable le estoy diciendo, EN CADA VUELTA (ya que se esta ejecutando dentro del forEach), hace una copia de lo que tenes hasta ahora y agregale un                 nuevo pokemon, AHORA EL ARRAY QUE ESTA VACIO ARRIBA, YA NO ESTA VACIO, SINO QUE TIENE LOS POKEMONES EN FORMA DE POKEMON.
                this.setState({ pokebola });
                // (3) POR ULTIMO: setea el stado de pokemons con este nuevo valor, por esto es IMPORTANTE LLAMARLO IGUAL AL ESTADO QUE ESTA VARIABLE QUE ESTAMOS DEFINIENDO
                // console.log(pokemons);
                //POKEMONS = [POKEMON,POKEMON,POKEMON]
                // POKEMON = {
                //id:01
                //name:volvasour
                //avatar: imagen q trajimos de la 2da peticion
              });
          });
        });
    }

  render() {
        return (
        <>
            {/**COMO MOSTRARLO EN LA INTERFAZ */}
            <h2>Peticiones Asincronas en componentes de clases</h2>
            {this.state.pokebola.map((element) => (
            <Pokemon
                key={element.id}
                name={element.name}
                avatar={element.avatar}
            />
            ))}
            {/**EN ESTE CASO, EL MAP ESTA RECORRIENDO LA POKEBOLA Y EL ELEMENT ES UN POKEMON
            * Y ESTAMOS RENDERIZANDO EL COMPONENTE POKEMON APLICANDOLE LAS PROPIEDADES QUE TIENE EL POKEMON, EN BUQLUE, POR CADA VUELTA ASIGNALE EL        VALOR DE EL ID,NOMBRE Y LA IMG.
            */}
        </>
        );
    }
    }



export function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}
