import styles from '../styles/Header.module.css';

function Header() {
    function mainClick(e) {
        window.location.href="/"
    }
    function usaClick(e) {
        window.location.href="/usa"
    }
    function canadaClick(e) {
        window.location.href="/canada"
    }

    return (
        <div className={styles.menu}>
            <div className={styles.main} onClick = {mainClick}>Main</div>
            <hr />
            <div className={styles.countryOption} onClick = {usaClick}>USA List</div>
            <hr />
            <div className={styles.countryOption} onClick = {canadaClick}>CANADA List</div>
        </div>
    );
}

export default Header;