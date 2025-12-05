import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { EthereumPriceResponse, BitcoinPriceResponse } from "./types";

// RTK Query API для получения цен криптовалют из CoinGecko
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.coingecko.com/api/v3/",
    }),
    // Кэшируем данные на 60 секунд
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        // Эндпоинт для получения цены Ethereum в EUR
        getEthereumPrice: builder.query<EthereumPriceResponse, void>({
            query: () => "simple/price?ids=ethereum&vs_currencies=eur",
        }),
        // Эндпоинт для получения цены Bitcoin в EUR
        getBitcoinPrice: builder.query<BitcoinPriceResponse, void>({
            query: () => "simple/price?ids=bitcoin&vs_currencies=eur",
        }),
    }),
});

// Автоматически сгенерированные хуки для использования в компонентах
export const { useGetEthereumPriceQuery, useGetBitcoinPriceQuery } = cryptoApi;
