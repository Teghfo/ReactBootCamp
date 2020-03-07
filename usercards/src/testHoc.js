import React, { useState } from "react";

const testHoc = (WrappedComponent, step) => {
  const TestHoc = props => {
    const [counter, setCounter] = useState(step);

    const handleCounter = () => {
      setCounter(prev => prev + 1);
    };
    return (
      <WrappedComponent
        counter={counter}
        handleCounter={handleCounter}
        {...props}
      />
    );
  };
  return TestHoc;
};

export default testHoc;
