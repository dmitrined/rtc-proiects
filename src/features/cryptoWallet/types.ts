// TypeScript типы для CoinGecko API ответов

export interface CryptoPriceResponse {
    [key: string]: {
        eur: number;
    };
}

export interface EthereumPriceResponse {
    ethereum: {
        eur: number;
    };
}

export interface BitcoinPriceResponse {
    bitcoin: {
        eur: number;
    };
}
