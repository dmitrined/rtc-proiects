import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SandwichState {
    ingredients: string[];
}

const initialState: SandwichState = {
    ingredients: [],
};

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients.push(action.payload);
        },
        reset: () => {
            return initialState;
        },
    },
});

export const { addIngredient, reset } = sandwichSlice.actions;
export default sandwichSlice.reducer;
