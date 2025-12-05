import type { JSX } from "react";
import NavBar from "./NavBar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";


export default function LayOut(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}