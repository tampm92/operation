import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Expression from '../components/partials/Expression';
import AddOperation from '../components/partials/AddOperation';
import isNumber from '../utils/isNumber';

const Result = () => {
  const firstOperand = useSelector((state) => state.expression.firstOperand);

  if (!isNumber(firstOperand)) {
    return <Redirect to="/" />;
  }
  return (
    <div className="expend">
      <Expression />
      <AddOperation />
    </div>
  );
};

export default Result;
