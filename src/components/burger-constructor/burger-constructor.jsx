import {useMemo, useState} from 'react';
import {ConstructorElement, Button, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import {itemsType} from '../../utils/types';
import diamond from '../../images/diamond.svg';
import styles from './burger-constructor.module.css';


export default function BurgerConstructor({ingredients}) {
  const [isModalOrder, setModalOrder] = useState(false);

  const bunsList = ingredients.filter((item) => item.type === 'bun');
  const bun = bunsList[0]
  const fillingsList = useMemo(() => ingredients.filter((item) => item.type !== 'bun'), [ingredients]);

  const openModal = () => {
    setModalOrder(true);
  };

  const handleClose = () => {
    setModalOrder(false);
  };

  return (
      <section className="pt-25 pl-4" aria-label="Конструктор бургеров">
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun?.name + ' (верх)'}
            price={bun?.price}
            thumbnail={bun?.image}
          />
        </div>
        <ul className={styles.ingredients}>
          {fillingsList.map(item => (
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
              text={bun?.name + ' (низ)'}
              price={bun?.price}
              thumbnail={bun?.image}
          />
        </div>
        <div className={`${styles.price} mt-10 mr-4`}>
          <p className="text text_type_digits-medium">
            610
            <img className={`${styles.diamond} ml-2`} src={diamond} alt="Diamond"/>
          </p>
          <Button htmlType="button" type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
        </div>

        {isModalOrder && (
            <Modal closeModal={handleClose}>
              <OrderDetails />
            </Modal>
        )}
      </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(itemsType).isRequired,
}