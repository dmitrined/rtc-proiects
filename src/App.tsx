import { type JSX, useEffect } from 'react'
import './App.css'
import { useAppSelector } from './app/hooks'
import { Route, Routes } from 'react-router-dom'
import LayOut from './navbar/LayOut'
import Login from './features/auth/Login'
import Home from './features/home/Home'
import ProtectedRoute from './navbar/ProtectedRoute/ProtectedRoute'
import AppProducts from './features/productsApp/AppProducts'
import { Counter } from './features/counter/Counter'
import UsersList from './features/users/UsersList'
import Weather from './features/weather/Weather'
import CryptoWallet from './features/cryptoWallet/CryptoWallet'

export default function App(): JSX.Element {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);


  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="productsList" element={<ProtectedRoute outlet={<AppProducts />} />} />
        <Route path="usersList" element={<ProtectedRoute outlet={<UsersList />} />} />
        <Route path="counter" element={<ProtectedRoute outlet={<Counter />} />} />
        <Route path="weatherApp" element={<ProtectedRoute outlet={<Weather />} />} />
        <Route path="cryptoWallet" element={<ProtectedRoute outlet={<CryptoWallet />} />} />



        <Route path="home" element={<Home />} />

      </Route>
    </Routes>
  )
}