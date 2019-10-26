import React from "react";

const Input = props => {
  const { name, type, handleChange, className, placeholder, value } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        onChange={event => handleChange(event.target)}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
