import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);

  const inputNumber = (newOperand) => {
      if (operator) {
        setOperand2(operand2 + newOperand);
      } else {
        setOperand1(operand1 + newOperand);
      }
  }

  const inputOperator = (operator) => {
    setOperator(operator);
  }

  const getResult = () => {
    if (operator === '+') {
      setResult(Number(operand1) + Number(operand2));
    }
    if (operator === '-') {
      setResult(Number(operand1) - Number(operand2));
    }
  }

  const reset = () => {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setResult('');
  }

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.field}>
          <div className={styles.result}>{result ? result : `${operand1}${operator}${operand2}`}</div>
        </div>
        <div className={styles.commands}>
          <div className={styles.numbers}>
            {NUMS.map(item => (
              <button key={+item} className={styles.numbersButton} onClick={() => inputNumber(item)}>{item}</button>
            ))}
          </div>
          <div className={styles.operators}>
              <button onClick={() => inputOperator('+')}>+</button>
              <button onClick={() => inputOperator('-')}>-</button>
              <button onClick={getResult}>=</button>
              <button onClick={reset}>c</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
