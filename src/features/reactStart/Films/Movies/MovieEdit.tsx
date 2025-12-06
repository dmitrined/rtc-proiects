import { useState, type FormEvent, type JSX } from "react";
import type Movie from "../types/Movie";
import { useDispatch } from "react-redux";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function MovieEdit(props: { movie: Movie }): JSX.Element {
  const { movie } = props;
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const [title, setTitle] = useState<string>(movie.title);
  const [genre, setGenre] = useState<string>(movie.genre);
  const [country, setCountry] = useState<string>(movie.country);
  const [releaseDate, setReleaseDate] = useState<string>(movie.releaseDate);
  const [image, setImage] = useState<string>(movie.image);
  const [play, setPlay] = useState<string>(movie.play);

  const [error, setError] = useState<string>("");

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Название не должно быть пустым");
      return false;
    }

    if (genre.trim() === "") {
      setError("Жанр не должно быть пустым");
      return false;
    }

    if (country.trim() === "") {
      setError("Страна не должно быть пустым");
      return false;
    }

    if (releaseDate.trim() === "") {
      setError("Год не должно быть пустым");
      return false;
    }

    if (image.trim() === "") {
      setError("Ссылка на картинку не должно быть пустым");
      return false;
    }

    if (play.trim() === "") {
      setError("Ссылкана фильм не должно быть пустым");
      return false;
    }

    return true;
  }

  function resetInputsAndError(): void {
    setTitle(movie.title);
    setGenre(movie.genre);
    setCountry(movie.country);
    setReleaseDate(movie.releaseDate);
    setImage(movie.image);
    setPlay(movie.play);
    setError("");
  }
  const dispatch = useDispatch();
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movies/edit",
        payload: {
          id: movie.id,
          title,
          genre,
          country,
          releaseDate,
          image,
          play,
        },
      });
      setToggle(false);
      resetInputsAndError();
    }
  }

  return (
    <>
      <EditNoteIcon
        onClick={handleToggle}
        className="text-orange-500 cursor-pointer hover:text-orange-700 transition duration-150 transform hover:scale-110 text-3xl"
      />

      {toggle && (
        <div className="absolute inset-0 bg-white p-4 z-10 flex flex-col justify-between rounded-xl shadow-inner">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 flex flex-col h-full"
          >
            <h2 className="text-lg font-bold text-gray-800 border-b pb-2">
              Редактировать
            </h2>
            {error && (
              <div className="p-1 text-xs font-medium text-red-800 bg-red-100 border-l-4 border-red-500 rounded">
                {error}
              </div>
            )}

            <input
              type="text"
              placeholder="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <input
              type="text"
              placeholder="Жанр"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <input
              type="text"
              placeholder="Страна"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <input
              type="text"
              placeholder="Год"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <input
              type="text"
              placeholder="Картинка (URL)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <input
              type="text"
              placeholder="Фильм (URL)"
              value={play}
              onChange={(e) => setPlay(e.target.value)}
              className="p-1 text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-0"
            />

            <div className="flex justify-end space-x-2 pt-2 mt-auto">
              <button
                type="button"
                onClick={handleToggle}
                className="py-1 px-3 bg-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-400 transition duration-150 shadow-sm"
              >
                <CancelIcon />
              </button>
              <button
                type="submit"
                className="py-1 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-lg hover:bg-indigo-600 transition duration-150 shadow-sm"
              >
                <SaveIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
