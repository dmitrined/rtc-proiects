import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
    currentLanguage: 'ru' | 'en' | 'de';
}

const initialState: LanguageState = {
    currentLanguage: 'ru',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<'ru' | 'en' | 'de'>) => {
            state.currentLanguage = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
