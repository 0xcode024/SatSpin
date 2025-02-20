import { ReactNode, createContext, useEffect, useState } from 'react';
import { IAuthContext, IWallet } from './auth.types';
export const AuthContext = createContext<IAuthContext>({} as any);

const AuthContextProvider = ({ children }: { children: NonNullable<ReactNode> }) => {
  const [wallet, setWallet] = useState<IWallet | null>(null);
  const [bitcoinPrice, setBitcoinPrice] = useState('');
  const [feeRateData, setFeeRateData] = useState<any[]>([]);

  const loginWithWallet = (wallet: IWallet) => {
    // localStorage.setItem(WALLET_COOKIE, JSON.stringify(wallet));
    setWallet(wallet);
  };

  const logout = () => {
    // auth.signOut().then(() => {
      // localStorage.removeItem(WALLET_COOKIE);
      setWallet(null);
    //   signOut({ redirect: false });
    // });
  };

//   const getFeeRate = async () => {
//     const res = await fetch('/api/feeRate');
//     const resData = await res.json();
//     setFeeRateData(resData);
//   };

//   useEffect(() => {
//     getFeeRate();
//     const i = setInterval(getFeeRate, 10000);

//     return () => clearInterval(i);
//   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await res.json();
        setBitcoinPrice(data.bitcoin.usd);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithWallet,
        logout,
        bitcoinPrice,
        wallet,
        feeRateData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
