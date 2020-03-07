import React, { useState } from "react";
import testHoc from "./testHoc";

function CounterTestHocByClick({ counter, handleCounter, user }) {
  return (
    <div>
      <button onClick={handleCounter}>
        {user} clicked {counter} time
      </button>
    </div>
  );
}

function CounterTestHocByMouseEnter({ counter, handleCounter, user }) {
  return (
    <div>
      <button onMouseEnter={handleCounter}>
        {user} clicked {counter} time
      </button>
    </div>
  );
}

export const NewByClick = testHoc(CounterTestHocByClick, 5);
export const NewByMouse = testHoc(CounterTestHocByMouseEnter, 10);
