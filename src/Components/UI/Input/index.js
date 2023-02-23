import React from "react";
import "./styles.css";
const Input = React.forwardRef(({label,input},ref) => {
  return (
    <div style={{marginBottom:4}}>
      <label htmlFor={input.id} style={{marginRight:4}}>{label}</label>
      <input ref={ref} id={input.id} {...input}/>
    </div>
  );
});

export default Input;
