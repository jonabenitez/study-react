import { useFetch } from "./useFetch";
//import {useFetchPrueba} from './Hooks/useFetchPrueba'



function CustomHooks() {
  //defino la url que voy a usar
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=6a2f6fabb124bc798b07d51d75319302&page=1`;

  //extrancion de los valores desde useFetch
  let { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h3>1- HOOK FETCH PERSONALIZADO</h3>
      <h3>2- is pending: {JSON.stringify(isPending)}</h3>
      <h3>3- error:{JSON.stringify(error)}</h3>

      <p className="p-1">
        <h3>DATOS EXTRAIDOS DE LA API</h3>
        {JSON.stringify(data)}
      </p>
    </div>
  );
}

export default CustomHooks;
