import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
