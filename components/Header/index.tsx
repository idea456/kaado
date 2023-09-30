import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>カーアド</h1>

            <h2 className={styles.item}>Home</h2>
            <h2 className={styles.item}>Learn</h2>
            <h2 className={styles.item}>Study</h2>
            <h2 className={styles.item}>Topics</h2>
        </div>
    );
}
