import styles from "@/styles/input.module.css";
const Input = (props) => {
  const { title, isRequired, type, onChangeHandler, isInvalid } = props;
  const classes = type != "radio" ? styles["textInput"] : "";
  return (
    <div className={classes}>
      <label>{title}</label>
      <input
        type={type}
        id={title}
        required={isRequired}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Input;
