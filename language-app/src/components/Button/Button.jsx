import styles from "./Button.module.css";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={disabled ? styles.disabledButton : styles.button}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
