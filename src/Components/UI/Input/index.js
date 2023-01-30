import React from "react";
import "./styles.css";
const Input = React.forwardRef(({label,input},ref) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input}/>
    </div>
  );
});

export default Input;
