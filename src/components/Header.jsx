import styles from './Header.module.css';
import todoLogo from '..//assets/todo.png'

export function Header(){
    return(
        <header className={styles.main}>
            <img src={todoLogo} alt="" />
            <p className={styles.name}>ToDo</p>
        </header>
    )
}