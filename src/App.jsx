import { useState } from 'react';
import styles from './app.module.css';

const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function App() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const onClickNumber = (newOperand) => {
      if (operator) {
        setOperand2((prev) => prev + newOperand);
      } else {
        setOperand1((prev) => prev + newOperand);
      }
  }

  const onClickOperator = (operator) => {
    setOperator(operator);
  }

  const onClickResult = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = Number(operand1) + Number(operand2);
        break; 
      case '-':
        result = Number(operand1) - Number(operand2);
        break; 
    }

    setResult(result);
  }
  
  const reset = () => {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setResult(null);
  }

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.field}>
          <div className={styles.result}>{result !== null ? result : `${operand1}${operator}${operand2}`}</div>
        </div>
        <div className={styles.commands}>
          <div className={styles.numbers}>
            {NUMS.map(item => (
              <button key={+item} className={styles.numbersButton} onClick={() => onClickNumber(item)}>{item}</button>
            ))}
          </div>
          <div className={styles.operators}>
            <button onClick={() => onClickOperator('+')}>+</button>
            <button onClick={() => onClickOperator('-')}>-</button>
            <button onClick={onClickResult}>=</button>
            <button onClick={reset}>c</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App