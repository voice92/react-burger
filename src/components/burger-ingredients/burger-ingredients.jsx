import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../ingredient/ingredient";
import styles from './burger-ingredients.module.css';
import data from '../../utils/data';

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  
  return (
      <section className="pt-10">
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={`${styles.tabs} mb-8`}>
          <Tab value="one" active={current === 1} onClick={() => setCurrent(1)}>
            Булки
          </Tab>
          <Tab value="two" active={current === 2} onClick={() => setCurrent(2)}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 3} onClick={() => setCurrent(3)}>
            Начинки
          </Tab>
        </div>
        <div className={styles.ingredients}>
          <div className="mt-2">
            <h2 className="text text_type_main-medium">Булки</h2>
            <ul className={`${styles.ingredient} pt-6 pl-4`}>
              {data.map((item) => item.type === 'bun' ? <Ingredient {...item} key={item._id}/> : '')}
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text text_type_main-medium">Соусы</h2>
            <ul className={`${styles.ingredient} pt-6 pl-4`}>
              {data.map((item) => item.type === 'sauce' ? <Ingredient {...item} key={item._id}/> : '')}
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text text_type_main-medium">Начинки</h2>
            <ul className={`${styles.ingredient} pt-6 pl-4`}>
              {data.map((item) => item.type === 'main' ? <Ingredient {...item} key={item._id}/> : '')}
            </ul>
          </div>
        </div>
      </section>
  );
}