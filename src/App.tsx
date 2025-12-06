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
import Alcohol from './features/reactStart/Alcohol/Alcohol'
import Anecdotes from './features/reactStart/Anecdotes/Anecdotes'
import Homework02 from './features/reactStart/CardProfil/Homework02/Homework02'
import CardSecurityCheck from './features/reactStart/CardSecurityCheck/CardSecurityCheck'
import ContactForm from './features/reactStart/ContactForm/ContactForm'
import DishApp from './features/reactStart/dishes/DishApp'
import DogsImage from './features/reactStart/DogsImage/DogsImage'
import Feedback from './features/reactStart/Feedback/Feedback'
import MoviesApp from './features/reactStart/Films/Movies/MoviesApp'
import SandwichRedux from './features/reactStart/sandwichRedux/SandwichRedux'

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

        <Route path="alcohol" element={<ProtectedRoute outlet={<Alcohol />} />} />
        <Route path="anecdotes" element={<ProtectedRoute outlet={<Anecdotes />} />} />
        <Route path="cardProfile" element={<ProtectedRoute outlet={<Homework02 />} />} />
        <Route path="cardSecurityCheck" element={<ProtectedRoute outlet={<CardSecurityCheck />} />} />
        <Route path="contactForm" element={<ProtectedRoute outlet={<ContactForm />} />} />
        <Route path="dishApp" element={<ProtectedRoute outlet={<DishApp />} />} />
        <Route path="dogsImage" element={<ProtectedRoute outlet={<DogsImage />} />} />
        <Route path="feedback" element={<ProtectedRoute outlet={<Feedback />} />} />
        <Route path="movies" element={<ProtectedRoute outlet={<MoviesApp />} />} />
        <Route path="sandwichRedux" element={<ProtectedRoute outlet={<SandwichRedux />} />} />



    
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