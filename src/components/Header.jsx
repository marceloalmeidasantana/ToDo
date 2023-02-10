import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.main}>
            <p className={styles.name}>ToDo</p>
        </header>
    )
}