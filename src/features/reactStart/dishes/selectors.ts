import type { RootState } from '../../../app/store';
import type Dish from './types/Dish';

const selectDishes = (state: RootState): Dish[] => state.dishes || [];

export default selectDishes;
