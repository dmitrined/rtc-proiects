// 1. Определение типов действий
export type SandwichAction =
    | { type: 'sandwich/addIngredient', payload: string }
    | { type: 'sandwich/reset' };

// 2. Определение типа состояния
export interface SandwichState {
    // Теперь это массив строк для ингредиентов
    ingredients: string[];
}

const initialState: SandwichState = {
    ingredients: [], // Начинаем с пустого массива
};

// 3. Классический редьюсер
export default function sandwichReducer(
    state: SandwichState = initialState,
    action: any
): SandwichState {
    switch (action.type) {
        case 'sandwich/addIngredient':
            return {
                ...state,
                // Добавляем новый ингредиент в массив
                ingredients: [...state.ingredients, action.payload],
            };
        case 'sandwich/reset':
            return initialState; // Возвращаем начальное состояние (пустой массив)
        default:
            return state;
    }
}