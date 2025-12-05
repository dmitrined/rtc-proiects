import { useGetEthereumPriceQuery, useGetBitcoinPriceQuery } from "./cryptoApi";
import "./CryptoWallet.css";

const CryptoWallet = () => {
    // Используем RTK Query хуки для получения данных
    const {
        data: ethereumData,
        error: ethereumError,
        isLoading: ethereumLoading,
    } = useGetEthereumPriceQuery();

    const {
        data: bitcoinData,
        error: bitcoinError,
        isLoading: bitcoinLoading,
    } = useGetBitcoinPriceQuery();

    return (
        <div className="crypto-wallet">
             <div className="flex justify-center">
      <a
        className="
          inline-block 
          py-2 px-4            
          text-white           
          bg-gray-800          
          border-2 border-gray-800 
          rounded-lg           
          font-bold            
          text-base            
          cursor-pointer       
          m-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        href=""
      >
        Посмотреть код этой страницы  GitHub
      </a>
    </div>

            <h2 className="crypto-wallet__title"> Crypto Wallet</h2>
            <div className="crypto-wallet__cards">
                {/* Bitcoin Card */}
                <div className="crypto-card">
                    <div className="crypto-card__header">
                        <h3 className="crypto-card__name">Bitcoin</h3>
                    </div>
                    <div className="crypto-card__content">
                        {bitcoinLoading && (
                            <div className="crypto-card__loading">Загрузка...</div>
                        )}
                        {bitcoinError && (
                            <div className="crypto-card__error">
                                Ошибка загрузки данных
                            </div>
                        )}
                        {bitcoinData && (
                            <div className="crypto-card__price">
                                <span className="crypto-card__amount">
                                    €{bitcoinData.bitcoin.eur.toLocaleString("de-DE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Ethereum Card */}
                <div className="crypto-card">
                    <div className="crypto-card__header">
                        <h3 className="crypto-card__name">Ethereum</h3>
                    </div>
                    <div className="crypto-card__content">
                        {ethereumLoading && (
                            <div className="crypto-card__loading">Загрузка...</div>
                        )}
                        {ethereumError && (
                            <div className="crypto-card__error">
                                Ошибка загрузки данных
                            </div>
                        )}
                        {ethereumData && (
                            <div className="crypto-card__price">
                                <span className="crypto-card__amount">
                                    €{ethereumData.ethereum.eur.toLocaleString("de-DE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoWallet;
