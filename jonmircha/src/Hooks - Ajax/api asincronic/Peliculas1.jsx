
 // eslint-disable-next-line react/prop-types
 function Peliculas({ id, title, avatar }) {
    return (
        <div>
            <h1>{id}</h1>
            <h3>{title}</h3>
            <img src={avatar} alt={avatar} />
        </div>
    );
}

export default Peliculas