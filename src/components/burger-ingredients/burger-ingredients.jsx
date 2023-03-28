import {useState, useMemo} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../ingredient/ingredient";
import IngredientDetails from '../ingredient-details/ingredient-details';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import PropTypes from 'prop-types';
import {itemsType} from "../../utils/types";

export default function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = useState(1);
  const [currentItem, setCurrentItem] = useState({});
  const [isModalIngredients, setModalIngredients] = useState(false);

  const buns = useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
  const mains = useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);

  const openModal = (item) => {
    setModalIngredients(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setModalIngredients(false);
  };
  
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
            {buns.map((item) => {
                return <Ingredient {...item} key={item._id} openModal={() => openModal(item)}/>
            })}
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text text_type_main-medium">Соусы</h2>
            <ul className={`${styles.ingredient} pt-6 pl-4`}>
            {sauces.map((item) => {
                return <Ingredient {...item} key={item._id} openModal={() => openModal(item)}/>
            })}
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text text_type_main-medium">Начинки</h2>
            <ul className={`${styles.ingredient} pt-6 pl-4`}>
            {mains.map((item) => {
                return <Ingredient {...item} key={item._id} openModal={() => openModal(item)}/>
            })}
            </ul>
          </div>
        </div>

        {isModalIngredients && (
            <Modal closeModal={handleClose}>
              <IngredientDetails item={currentItem}/>
            </Modal>
        )}
      </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(itemsType).isRequired,
}