import { useEffect, useState, type JSX } from "react";
import style from './Alcohol.module.css'

export default function Alcohol(): JSX.Element {
  const [name,setName] = useState<string>('')
  const [image,setImage] = useState<string>('')
  
  //Асенхронный Promes 
  async function loadAlcohol():Promise<void>{
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    const obj = await res.json()
    const {drinks} = obj
    const {strDrink, strDrinkThumb} = drinks[0]
    setName(strDrink)
    setImage(strDrinkThumb)
  }
  useEffect(()=>{
    loadAlcohol()
  },[])
    return (

    <div>
      <h1>Alcohol : {name}</h1>
      <div className={style.container}>
        <img src={image} alt="" />
      </div>

      <div className={style.btn}>
        <button type="button" onClick = {loadAlcohol}>Next Image</button>
      </div>

      {/* Кнопка для GitHub кода */}
      <a
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    textDecoration: 'none', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#24292e', 
    border: '2px solid #24292e',
    borderRadius: '6px',
    marginTop: '15px' 
  }}
  target="_blank"
  href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/Lecture/L3/Alcohol"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  )
}
