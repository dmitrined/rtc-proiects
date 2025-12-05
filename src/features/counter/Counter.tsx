import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { decrement, increment } from "./counterSlice";


export const Counter = () =>{

    const value  = useAppSelector((state)=> state.counter.value);
     // → Получаем текущий счётчик из Redux.
    const dispatch = useAppDispatch();
     // → Берём типизированный dispatch.

     return(
        <div style={{textAlign:"center", marginTop:"40px"}}>
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
        href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/counter"
      >
        Посмотреть код этой страницы  GitHub
      </a>
    </div>
            <h1>Счетчик: {value}</h1>
        <div className="flex gap-3 justify-center">
            
            <button 
                onClick={() => dispatch(increment())}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                +1
            </button>
            
            <button 
                onClick={() => dispatch(decrement())}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
                -1
            </button>
        </div>
        </div>
     )
}
