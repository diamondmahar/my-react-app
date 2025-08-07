import './header.css';
import styles from './header.module.css';
import "./header.css";
import { InputWrapper , InputStyle } from './styleComponent';
function Header() {
  return (
    <header>
      <div>
        <nav>
          <InputWrapper>
            <ul className={styles.navList}>
              <li className={styles['list-item']}>
                <><a href="#">Home</a></>
              </li>
              <li className={styles['list-item']}>
                <><a href="#">About</a></>
              </li>
              <li className={styles['list-item']}>
                <><a href="#">Contact</a></>
              </li>
            </ul>
            <InputStyle type="text" placeholder="Search..." />
          </InputWrapper>
        </nav>
      </div>
    </header>
  )
}

export default Header;
