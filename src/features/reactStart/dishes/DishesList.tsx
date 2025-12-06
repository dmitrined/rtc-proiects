import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import ClearIcon from '@mui/icons-material/Clear';
import selectDishes from './selectors';
import type { DishId } from './types/Dish';
import { deleteDish } from './dishesSlice';

import styles from './DishesList.module.css';
import DishEditForm from './DishEditForm';
import type { JSX } from 'react';


export default function DishesList(): JSX.Element {
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();
  // ... imports
  // inside component
  const handleDelete = (id: DishId): void => {
    dispatch(deleteDish(id));
  };

  return (
    <ul className={styles.list}>
      {
        dishes.map((dish) => (
          <li key={dish.id} className={styles.dishCard}>
            <h3 className={styles.heading}>{dish.title}</h3>
            <p className={styles.category}>{dish.category}</p>
            <img className={styles.image} src={dish.image} alt={dish.title} />
            <p className={styles.price}>{dish.price} €</p>
            <div className={styles.icons}>
              <ClearIcon onClick={() => handleDelete(dish.id)} />
              <DishEditForm dish={dish} />
            </div>

          </li>
        ))
      }
    </ul>
  );
}
