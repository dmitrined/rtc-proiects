import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { uid } from 'uid';
import type Dish from './types/Dish';
import type DishDto from './types/DishDto';

const initialState: Dish[] = [
    {
        id: uid(),
        title: 'salad',
        category: 'snack',
        price: 9,
        image: 'https://c.pxhere.com/photos/25/95/salad_food_dish_plate_meal_healthy_cuisine_fresh-1289471.jpg!s2',
    }
];

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        createDish: (state, action: PayloadAction<DishDto>) => {
            // Immer allows us to "mutate" state directly
            state.push({ ...action.payload, id: uid() });
        },
        deleteDish: (state, action: PayloadAction<string>) => {
            return state.filter((dish) => dish.id !== action.payload);
        },
        editDish: (state, action: PayloadAction<Dish>) => {
            const index = state.findIndex(dish => dish.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { createDish, deleteDish, editDish } = dishesSlice.actions;

export default dishesSlice.reducer;
