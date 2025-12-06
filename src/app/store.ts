import { configureStore, combineReducers, type ThunkDispatch, type UnknownAction } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from '../features/productsApp/products/productsSlice';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/productsApp/cart/cartSlice';
import authReducer from "../features/auth/authSlice";
import weatherStateReducer from "../features/weather/weatherSlice";
import themeReducer from "../features/theme/themeSlice";
import languageReducer from "../features/language/languageSlice";
import { usersApi } from "../features/users/usersApi";
import { weatherApi } from "../features/weather/weatherApi";
import { cryptoApi } from "../features/cryptoWallet/cryptoApi";
import { christmasApi } from "../features/christmas-countdown/christmasApi";
import dishesReducer from '../features/reactStart/dishes/dishesSlice';
import moviesReducer from '../features/reactStart/Films/Movies/moviesSlice';
import sandwichesReducer from '../features/reactStart/sandwichRedux/sandwichSlice';
import tasksReducer from '../features/reactStart/tasks/TasksReduser';
import { timerSlice } from "../features/christmas-countdown/timerSlice";
// ---------- Объединяем все редьюсеры ----------
const rootReducer = combineReducers({
    products: productsReducer,
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    weatherState: weatherStateReducer,
    theme: themeReducer,
    language: languageReducer,
    dishes: dishesReducer,
    movies: moviesReducer,
    sandwiches: sandwichesReducer,
    tasks: tasksReducer,
    timer: timerSlice.reducer,

    // RTK Query reducers
    [weatherApi.reducerPath]: weatherApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [christmasApi.reducerPath]: christmasApi.reducer,
});

// ---------- Настройки persist ----------
// Сохраняем auth и кэш RTK Query APIs
const persistConfig = {
    key: "root", // имя "корневого" ключа, под которым всё состояние будет храниться в storage
    // в localStorage будет ключ вроде: persist:root
    storage, // Это означает: используй localStorage браузера
    whitelist: ["auth", "weatherState", "counter", "theme", "language", "tasks"],
    // список строк с именами редьюсеров, которые нужно сохранять
    // Важно: только эти части состояния попадут в localStorage. Остальное — нет.
};

// Оборачиваем rootReducer в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// ---------- Создаём store ----------
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Игнорируем redux-persist actions
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(weatherApi.middleware, usersApi.middleware, cryptoApi.middleware, christmasApi.middleware) as any,
});

// ---------- Создаём persistor ----------
export const persistor = persistStore(store);

// ---------- Типы для useSelector и useDispatch ----------
// Определяем RootState из rootReducer ДО применения persist
export type RootState = ReturnType<typeof rootReducer>;
// Явно определяем AppDispatch с поддержкой thunk
export type AppDispatch = ThunkDispatch<RootState, undefined, UnknownAction>;