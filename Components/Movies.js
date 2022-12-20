import Poster from "./Poster";

function Movies({ results }) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((movie) => (
                <Poster key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movies;
