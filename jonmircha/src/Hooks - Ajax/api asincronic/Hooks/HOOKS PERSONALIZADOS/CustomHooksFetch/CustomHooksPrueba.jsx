import { useFetchPrueba } from "./useFetchPrueba";

function PeticionPokeCustom() {
  // Defino la URL que voy a usar
  let url = "https://pokeapi.co/api/v2/pokemon";

  // Extraigo los datos
  let { data } = useFetchPrueba(url);

  // Verifica si data es nulo o no tiene la propiedad 'results' esto le da tiempo a la ejecucion es si o si
  if (!data || !data.results) {
    return <div>Cargando...</div>;
  }

  // Mapeo los resultados y extraigo los nombres
  const nombresPokemon = data.results.map((pokemon) => pokemon.name);
  console.log(nombresPokemon)

  return (
    <div>
      <h1>Nombres de Pokémon:</h1>
      <ul>
        {nombresPokemon.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default PeticionPokeCustom;
