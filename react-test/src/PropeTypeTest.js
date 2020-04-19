import React from "react";
import PropTypes from "prop-types";

export default function HelloPropTypeCheck({
  name,
  age,
  onChangeHandler,
  arr,
  arrTemplate,
  children,
  objectOfNum
}) {
  onChangeHandler();
  return (
    <div>
      <p>{name}:</p>
      <span>{age}</span>
      {arr.map((item, indx) => (
        <div key={indx}>{item}</div>
      ))}
      {children}
    </div>
  );
}

HelloPropTypeCheck.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  onChangeHandler: PropTypes.func.isRequired,
  arr: PropTypes.array,
  arrTemplate: PropTypes.arrayOf(
    PropTypes.shape({
      lName: PropTypes.string,
      fName: PropTypes.string,
      age: PropTypes.number,
      religion: PropTypes.bool.isRequired,
      reactBaladi: PropTypes.bool
    })
  ),
  children: PropTypes.element.isRequired,
  objectOfNum: PropTypes.objectOf(PropTypes.number)
};
