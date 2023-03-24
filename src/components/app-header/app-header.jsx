import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

export default function AppHeader() {
  return (
      <header>
        <nav className={styles.menu}>
          <div className={styles.buttonsWrapper}>
            <button className={`${styles.button} pt-4 pr-5 pb-4 pl-5`}>
              <BurgerIcon type='primary'/>
              <span className="text text_type_main-default">Конструктор</span>
            </button>
            <button className={`${styles.button} pt-4 pr-5 pb-4 pl-5`}>
              <ListIcon type='secondary'/>
              <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
            </button>
          </div>
          <Logo/>
          <button className={`${styles.button} pt-4 pr-5 pb-4 pl-5`}>
            <ProfileIcon type='secondary'/>
            <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
          </button>
        </nav>
      </header>
  );
}