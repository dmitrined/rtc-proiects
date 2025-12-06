import type { JSX } from "react";
import DishesList from "./DishesList";
import DishForm from "./DishForm";

export default function DishApp(): JSX.Element {
  return (
    <div>
      <DishForm />
      <DishesList />
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
  href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/Consultation/Practice4/dishes"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}
