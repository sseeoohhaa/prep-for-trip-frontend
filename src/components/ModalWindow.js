import styles from "../styles/ModalWindow.module.css";

function ModalWindow(props) {
    return (
        <div className={styles.modalWindow}>
            <p>Modal Window</p>
            <p onClick = {() => props.isOpen(false)}>X</p>
        </div>
    );
}

export default ModalWindow;