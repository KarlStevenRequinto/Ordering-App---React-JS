import "./styles.css";
const Input = ({label,input}) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} {...input}/>
    </div>
  );
};

export default Input;
