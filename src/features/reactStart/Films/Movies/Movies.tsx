import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "./selectors";
import type { MovieId } from "../types/Movie";
import MovieEdit from "./MovieEdit";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movies(): JSX.Element {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const handleDelete = (id: MovieId): void => {
    dispatch({ type: "movies/delete", payload: id });
  };

  const PlaceholderImage: JSX.Element = (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
      <NoPhotographyIcon className="text-4xl" />
    </div>
  );

  return (
    <div className="p-4 sm:p-8">
      <ul className="flex flex-col items-center gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="overflow-hidden w-full max-w-lg bg-white rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 group relative flex flex-col"
          >
            <div className="h-64 overflow-hidden shrink-0">
              {movie.image && movie.image.startsWith("http") ? (
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:opacity-90"
                />
              ) : (
                PlaceholderImage
              )}
            </div>

            <div className="p-5 grow flex flex-col justify-between h-52">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition h-14">
                {movie.title}
              </h3>
              <div className="space-y-1">
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-indigo-500">Жанр:</span>{" "}
                  {movie.genre}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-indigo-500">Страна:</span>{" "}
                  {movie.country}
                </p>
                <p className="text-gray-600 text-sm min-h-5">
                  <span className="font-semibold text-indigo-500">Год:</span>{" "}
                  {movie.releaseDate}
                </p>
              </div>
            </div>

            <div className="flex justify-between p-4 border-t border-gray-100 bg-gray-50/50 shrink-0">
            {movie.play && (
                <a
                  href={movie.play}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Смотреть фильм ${movie.title}`}
                  className="text-green-500 cursor-pointer hover:text-green-700 transition duration-150 transform hover:scale-110 text-3xl"
                >
                  <PlayCircleOutlineIcon className="text-3xl" />
                </a>
              )}
              <div className="flex space-x-3">
                <DeleteIcon
                  onClick={() => handleDelete(movie.id)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition duration-150 transform hover:scale-110 text-3xl"
                />
                <MovieEdit movie={movie} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
