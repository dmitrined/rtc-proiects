import { useState, type JSX } from "react";
import Products from "./products/Products";
import CartIcon from "./CartIcon/CartIcon";
import Cart from "./cart/Cart";

export default function AppProducts(): JSX.Element{
    const [showCart, setShowCart] = useState(false);
  return (
    <div>
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
          mt-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        href="https://github.com/dmitrined/toolkit_projects_ait/tree/main/my-toolkit/src/features/productsApp"
      >
        Посмотреть код этой страницы  GitHub
      </a>
    </div>
      <Products />
<CartIcon onClick={() => setShowCart((prev) =>!prev)}/>
{showCart && <Cart />}
    </div>
  )
}
