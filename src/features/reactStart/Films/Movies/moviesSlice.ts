import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
import type Movie from "../types/Movie";
import type MovieCredentials from "../types/MovieCredentials";
import type { MovieId } from "../types/Movie";

const initialState: Movie[] = [
    {
        id: "uid()",
        title: "Холоп",
        genre: "Комедия",
        country: "Россия",
        releaseDate: "2019-12-26",
        image:
            "https://avatars.mds.yandex.net/i?id=756807521f475d9d5c7868bf13c8c1327d412841-8313048-images-thumbs&n=13",
        play: "https://ya.ru/video/preview/15951831415708689037",
    },
    {
        id: "uid()",
        title: "Легенда №17",
        genre: "Спорт, Биография",
        country: "Россия",
        releaseDate: "2013-04-18",
        image:
            "https://avatars.mds.yandex.net/i?id=4da97023d542deb6ab1aa7e8d1751aa955e58245-5479895-images-thumbs&n=13",
        play: "https://ya.ru/video/preview/7121214935003793485",
    },
    {
        id: "uid()",
        title: "Брат",
        genre: "Криминал, Драма",
        country: "Россия",
        releaseDate: "1997-05-12",
        image:
            "https://avatars.mds.yandex.net/i?id=dc40006099975b2662ac2df565d467bf14a0ffa4-5277860-images-thumbs&n=13",
        play: "https://ya.ru/video/preview/6002393024289153776",
    },
    {
        id: "uid()",
        title: "Движение вверх",
        genre: "Спорт, Драма",
        country: "Россия",
        releaseDate: "2017-12-28",
        image:
            "https://avatars.mds.yandex.net/i?id=9122b336dd666838f065d2c32f2728bd_l-6871359-images-thumbs&n=13",
        play: "https://ya.ru/video/preview/11184042121073016742",
    },
];

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<MovieCredentials>) => {
            state.push({ ...action.payload, id: uid() });
        },
        delete: (state, action: PayloadAction<MovieId>) => {
            // Since Immer is used, we can mutate or return new state.
            // filter returns new state, so we return it.
            return state.filter((movie) => movie.id !== action.payload);
        },
        edit: (state, action: PayloadAction<Movie>) => {
            const index = state.findIndex((movie) => movie.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { add, delete: deleteMovie, edit } = moviesSlice.actions;

export default moviesSlice.reducer;
