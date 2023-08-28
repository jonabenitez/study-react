//import AjaxApis from './componentes/PETICION AJAX-API POKEMON/peticionesAjax-Api'
import Hooks from "./Hooks- UseState/UseEfect/useState-contador";
import Reloj from "./Hooks- UseState/UseEfect/UseEfect-Reloj";
import RelojPractica from './Hooks- UseState/UseEfect/RelojPractica'
import "./App.css";
//import AjaxHooks from "./Hooks - Ajax/api asincronic/AjaxHooks";
//import MoviePracticas from "./Hooks - Ajax/api asincronic/MoviePracticas";
import CustomHooks from "./Hooks - Ajax/api asincronic/CustomHooks";


function App() {
  return (
    <>
      <Hooks titulo="soy un titulo como propiedad" />
      <Reloj/>
      <RelojPractica/>
      {/* <AjaxHooks/> */}
      {/* <MoviePracticas/>  */}
      <CustomHooks/>
    </>
  );
}

export default App;
