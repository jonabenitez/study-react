import { useState, useEffect } from "react";

// este useFetch recibe solo peticiones por get, por url.
export const useFetch = (url) => {
  // uso tres variables

  // esta controlan los datos que vienen de la url.
  const [data, setData] = useState(null);
  // esta controla que la peticion este respondida, es decir, pendiente de usar.
  const [isPending, setIsPending] = useState(true);
  // controla si hay o no un error
  const [error, setError] = useState(null);

  // este se va a activar cuando cambie la url en el useFetch.
  useEffect(() => {
    const  getData = async (url) => {
      try {
        // 1)intentamos la peticion a la url que viene del parametro getData
        let res = await fetch(url);

        //1.A) si la respuesta es diferente a ok, manejamos este error.
        if (!res.ok) {
          throw {
            err: true, // seestablece la prop err como verdadera
            status: res.status, // se almacena en que estado esta la peticion
            statusText: !res.statusText
              ? "ocurrio un error"
              : res.statusText, // y si no viene vacio el estado que nos notifique por defecto el error
          };
        }


        //2) si no hay error
        // convertimos a json los datos
        let jsonData = await res.json();
        // seteamos las variables
        setIsPending(false); // no esta pendiente, ya estamos usando la peticion
        setData(jsonData); // seteamos el valor de data con el valor que nos trae esta peticion
        setError(null); // y seteamos el estado del error en falso porque está todo bien.

        
      } catch (err) {
        setIsPending(false); // la peticion queda pendiente.
        setError(err); // este err lo cacha del throw de arriba,
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
