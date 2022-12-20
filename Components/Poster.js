import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Poster({ movie }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div className="p-3 z-10 group transition transform duration-200 ease-in hover:scale-105 hover:z-50 hover:shadow-lg">
            <Image
                layout="responsive"
                width="1920"
                height="1080"
                src={
                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                    `${BASE_URL}${movie.poster_path}`
                }
            />
            <div className="p-2">
                <p className="truncate max-w-md">{movie.overview}</p>
                <h2 className="text-2xl text-white transition ease-in-out duration-150 group-hover:font-bold">
                    {movie.title || movie.original_name}
                </h2>
                <p className="flex items-center  opacity-0 group-hover:opacity-60">
                    {movie.media_type && `${movie.media_type}`}
                    {"  "}
                    {movie.release_date || movie.first_air_date}
                    {"  "}
                    <ThumbUpIcon className="w-5 ml-2 mr-1" /> {movie.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Poster;
