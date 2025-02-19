import styles from "./Modal.module.scss";

function Modal({ isOpen, setModalOpen, children, buttonText, buttonText2 }) {
  if (isOpen) {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          {children}
          <div className={styles.btnContainer}>
            <button className={styles.btnContinuar} onClick={setModalOpen}>
              {buttonText}
            </button>
            <button className={styles.btnLimpar} onClick={setModalOpen}>
              {buttonText2}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
export default Modal;
