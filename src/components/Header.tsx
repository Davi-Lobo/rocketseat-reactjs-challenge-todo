import styles from './Header.module.css';

import toDoLogo from '../assets/todo-logo.svg';

export function Header() {
    return(
        <header className={styles.pageHeader}>
            <div className={styles.pageHeaderContent}>
                <img className="logo" src={toDoLogo} alt="Logotipo do ToDo app" />
            </div>
        </header>
    );
}