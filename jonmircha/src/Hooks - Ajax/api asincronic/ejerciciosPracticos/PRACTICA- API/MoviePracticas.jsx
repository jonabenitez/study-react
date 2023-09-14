import { useState, useEffect } from "react";
import Peliculas  from "../Peliculas1";

let pagina = 1;

function MoviePracticas() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovies = async (url) => {
      let res = await fetch(url);
      let json = await res.json();

      console.log(json);

      json.results.forEach((el) => {
        console.log(el)
        let pelis = {
          id: el.id,
          title: el.title,
          avatar: `https://image.tmdb.org/t/p/w500/${el.poster_path}`
        };
        setmovies((movies) => [...movies, pelis]);
      });
    };

    getMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=6a2f6fabb124bc798b07d51d75319302&page=${pagina}`
    );
  }, []);
  return (
    <div>
      {movies.map((el) => (
        <Peliculas
          key={el.id}
          title={el.title}
          avatar={el.avatar}
        />
      ))}
    </div>
  );
}

export default MoviePracticas;
