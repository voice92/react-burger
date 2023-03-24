import React from 'react';
import {ConstructorElement, Button, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data';
import styles from './burger-constructor.module.css';
import diamond from '../../images/diamond.svg';

export default function BurgerConstructor() {
  const buns = data.filter((item) => item.type === 'bun');

  return (
      <section className="pt-25 pl-4" aria-label="Конструктор бургеров">
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={buns[0].name + ' (верх)'}
            price={buns[0].price}
            thumbnail={buns[0].image}
          />
        </div>
        <ul className={styles.ingredients}>
          {data.filter(item => item.type !== 'bun').map(item => (
              <li className={`${styles.ingredient} mb-4`} key={item._id}>
                <DragIcon type="primary"/>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            )
          )}
        </ul>
        <div className="ml-8">
          <ConstructorElement
              type="bottom"
              isLocked={true}
              text={buns[0].name + ' (низ)'}
              price={buns[0].price}
              thumbnail={buns[0].image}
          />
        </div>
        <div className={`${styles.price} mt-10 mr-4`}>
          <p className="text text_type_digits-medium">
            610
            <img className={`${styles.diamond} ml-2`} src={diamond} alt="Diamond"/>
          </p>
          <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
        </div>
      </section>
  );
}