// cremamos un  hooks custom
//la idea es una peticion fetch que sea generica, para eso es necesario, useefect y usestate
import { useEffect, useState } from "react";

export const useFetchPrueba = (url) => {
  //esta {url} es la que va a entrar como parametro cuando llamemos la funtcion fetch
  // una vez creado el hooks, vamos a empezar con 3 stados, que son los que vamos a necesitar.

  //1) data: son los datos que pedimos a la url- INICIA VACIO.
  const [data, setdata] = useState(null);
  //2) Pending: si la data esta pendiente de uso (no fue respondida).
  const [pending, setpending] = useState(true);
  //3) err. para identificar si hay un error y tener referencias de que es.
  const [error, seterror] = useState(null);

  //PORQUE USAMOS EL USEEFECT??
  //porque podemos determinar cuando se activa una porcion de codigo, en base a algun cambio, ya sea en la interfaz o la data.
  // por lo tanto aca arranca la parte funcional del codigo, utilizando las variables de arriba y rambien para pasarle como parametro la url, para que entre como argumento en el getData.
  useEffect(
    (url) => {
      //creamos la funcion que
      const getData = async (url) => {
        try {
          let res = await fetch(url);

          if (!res.ok) {
            //si la respuesta es distinta a 200, creame el siguiente objeto de error
            let errorObject = {
              err: true,
              status: res.status,
              statusText: !res.statusText ? "ocurrio un error" : res.statusText,
              //esto se ejecuta en el catch
            };
            //console.log(errorObject);
            throw {
              //cargamos el errorObject para que pueda ser captado por el cath que sige
              errorObject,
            };
          }

          //si todo esta bien segui con esta parte del codigo
          let json = await res.json();

          //seteamos todo los parametros, los 3 que definimos arriba
          setdata(json)
          setpending(false)
          seterror(null)




        } catch (errorObject) {
            seterror(errorObject)
            setpending(false)
        }
      };

    
   

    //ejecutamos la funcion para traer la url
        getData(url)
    },  [url]  );
  //este[url] sirve para indicar que se actifa el useFerch cuando cambia la url
  return {data,pending,error}
};
