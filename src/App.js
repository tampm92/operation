import React, { useState } from 'react';
import AddNumber from './components/partials/AddNumber';
import AddOperation from './components/partials/AddOperation';
import Expression from './components/partials/Expression';
import './assets/scss/font.scss';
import './App.scss';

const App = () => {
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [sencondOperand, setSecondOperand] = useState('');

  return (
    <div className="App">
      <div className="app-content">
        <div className="header">
          <h1 className="title ff3">Expression</h1>
          <h1 className="title ff3">Evaluator</h1>
        </div>
        <AddNumber onClick={setFirstOperand} />
        <Expression
          firstOperand={firstOperand}
          sencondOperand={sencondOperand}
          operator={operator}
        />
        <AddOperation setOperator={setOperator} setOperand={setSecondOperand} />
      </div>
    </div>
  );
};

export default App;
