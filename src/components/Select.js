import React from "react";

const Select = props => {
  const { name, value, className, options, handleChange } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={event => handleChange(event.target)}
        className={`select__input ${className}`}
      >
        {options.map(({ optionValue, label }) => (
          <option
            value={optionValue}
            // selected={value === optionValue}
            key={Date.now() * 10 * Math.random()}
          >
            {label}
          </option>
        ))}
      </select>
      <img
        className="select__arrow"
        src="./images/arrow-down.svg"
        alt="arrow__down"
      />
    </div>
  );
};

export default Select;
