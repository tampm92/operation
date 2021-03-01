import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Operand from '../commons/Operand';
import isNumber from '../../utils/isNumber';
import { getOperation } from '../../utils/calculator';

const Expression = () => {
  const [result, setResult] = useState('');
  const experssionValue = useSelector((state) => state.expression);

  const { firstOperand, secondOperand, operator } = experssionValue;

  useEffect(() => {
    if (isNumber(firstOperand) && isNumber(secondOperand) && operator) {
      const operation = getOperation(operator);
      const data = operation.calculate(firstOperand, secondOperand);
      setResult(data);
    }
  }, [firstOperand, secondOperand, operator]);

  return (
    <div className="expression">
      <div className="operators">
        <Operand value={firstOperand} className="operator" />
        <Operand value={secondOperand} className="operator" />
        <Operand value={operator} className="operator" />
      </div>
      <div className="equal">=</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Expression;
