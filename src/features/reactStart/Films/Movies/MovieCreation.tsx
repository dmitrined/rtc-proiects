import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

export default function MovieCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [play, setPlay] = useState<string>("");

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

  function clearInputsAndError(): void {
    setTitle("");
    setGenre("");
    setCountry("");
    setReleaseDate("");
    setImage("");
    setPlay("");
    setError("");
  }

  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movies/add",
        payload: {
          title,
          genre,
          country,
          releaseDate,
          image,
          play,
        },
      });
      clearInputsAndError();
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-2xl my-10 border-t-4 border-indigo-500">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center flex items-center justify-center">
        <span className="text-indigo-500 mr-3">🎬</span> Добавить новый фильм
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 mb-4 text-sm font-semibold text-red-800 bg-red-100 border-l-4 border-red-500 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 font-medium text-gray-700">
            Название
          </label>
          <input
            id="title"
            type="text"
            placeholder="Введите название фильма"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="mb-2 font-medium text-gray-700">
            Жанр
          </label>
          <input
            id="genre"
            type="text"
            placeholder="Введите жанр"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="country" className="mb-2 font-medium text-gray-700">
            Страна
          </label>
          <input
            id="country"
            type="text"
            placeholder="Введите страну"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="releaseDate"
            className="mb-2 font-medium text-gray-700"
          >
            Дата выхода
          </label>
          <input
            id="releaseDate"
            type="text"
            placeholder="Например, 2023"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-2 font-medium text-gray-700">
            Ссылка на картинку
          </label>
          <input
            id="image"
            type="text"
            placeholder="URL изображения"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="play" className="mb-2 font-medium text-gray-700">
            Ссылка на фильм
          </label>
          <input
            id="play"
            type="text"
            placeholder="URL фильма"
            value={play}
            onChange={(e) => setPlay(e.target.value)}
            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Добавить фильм
        </button>
      </form>
    </div>
  );
}
