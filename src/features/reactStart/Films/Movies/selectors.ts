import type { RootState } from '../../../../app/store';
import type Movie from "../types/Movie";

export const selectMovies = (state: RootState): Movie[] => state.movies;
