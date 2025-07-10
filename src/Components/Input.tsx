import styles from "@/styles/input.module.css";
interface InputInteface{
  title:string,
  type:string,
  onChangeHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void
  isInvalid?:boolean
  value?:string|number
  name?:string
  isRequired?:boolean
}
const Input = (props:InputInteface) => {
  const { title, isRequired, type, onChangeHandler, isInvalid ,value,name} = props;
  const classes = type != "radio" ? styles["textInput"] : "";
  return (
    <div className={classes}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        id={name}
        required={isRequired}
        value={value}
        onChange={onChangeHandler}
        name={name}
      />
    </div>
  );
};

export default Input;
