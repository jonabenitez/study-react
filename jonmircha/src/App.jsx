//import AjaxApis from './componentes/PETICION AJAX-API POKEMON/peticionesAjax-Api'
import Hooks from "./Hooks- UseState/UseEfect/useState-contador";
import Reloj from "./Hooks- UseState/UseEfect/UseEfect-Reloj";
import RelojPractica from './Hooks- UseState/UseEfect/RelojPractica'
import "./App.css";
//import AjaxHooks from "./Hooks - Ajax/api asincronic/Hooks/HOOKS PERSONALIZADOS/CustomHooksFetch/AjaxHooks";
//import MoviePracticas from "./Hooks - Ajax/api asincronic/MoviePracticas";
import CustomHooks from "./Hooks - Ajax/api asincronic/Hooks/HOOKS PERSONALIZADOS/CustomHooksFetch/CustomHooks";
import Referencias from "./Hooks - Ajax/api asincronic/ejerciciosPracticos/HookRef/HookRef";
import PeticionPokeCustom from "./Hooks - Ajax/api asincronic/Hooks/HOOKS PERSONALIZADOS/CustomHooksFetch/CustomHooksPrueba";
import Formularios from "./formularios/Formularios"

function App() {
  return (
    <>
      <Hooks titulo="soy un titulo como propiedad" />
      <Reloj/>
      <RelojPractica/>
      {/* <AjaxHooks/>  */}
      {/* <MoviePracticas/>  */}
      <CustomHooks/>
      <Referencias/>
      <PeticionPokeCustom/>
      <Formularios/>
    </>
  );
}

export default App;
