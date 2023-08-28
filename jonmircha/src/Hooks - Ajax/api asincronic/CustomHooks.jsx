import {useFetch} from './Hooks/useFetch' 
//import {useFetchPrueba} from './Hooks/useFetchPrueba' 


function CustomHooks() {
  let url =   `https://api.themoviedb.org/3/movie/popular?api_key=6a2f6fabb124bc798b07d51d75319302&page=1`
  
 let  {data, isPending, error} = useFetch(url)


  return (
    <div>
      <h3>1- HOOK FETCH PERSONALIZADO</h3>
      <h3>2- peticion pendiente de uso: {JSON.stringify(isPending)}</h3>
      <h3>3- error:{JSON.stringify(error)}</h3>

      <p className='p-1'>
        <h3>data</h3>
        {JSON.stringify(data)}</p>
    </div>
  )
}

export default CustomHooks