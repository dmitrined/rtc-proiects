import { useEffect, useState, type JSX } from "react";
import style from './DogsImage.module.css'

export default function DogsImage(): JSX.Element {
  const [URL, setURL] = useState<string>('');
  
  async function loadDogPicture(): Promise<void> {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json();
    console.log(obj);
    const { message } = obj;
    setURL(message);
  }

  useEffect(() => {
    loadDogPicture();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Random Dog</h1>
      <div className={style.imageContainer}>
        <img className={style.image} src={URL} alt="random-dog" />
      </div>
      <button className={style.btn} type="button" onClick={() => loadDogPicture()}>
        Next image
      </button>
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
  href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/Lecture/L4/DogsImage"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}










