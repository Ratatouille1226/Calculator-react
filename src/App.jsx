import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const OPERATORS = ['+', '-', '=', 'C'];
  
  const [calc, setCalc] = useState('');
  const [isCalcResult, setIsCalcResult] = useState(false);

  const performTheOperation = (num) => {
    if (num === '=') {
      setCalc(eval(calc));
      setIsCalcResult(true);
    } else {
      setIsCalcResult(false);
      setCalc((prev) => prev + num);
    }

    if (num === 'C') {
      setCalc('');
      setIsCalcResult(false);
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.field}>
          <div className={isCalcResult ? styles.resultCalc : styles.result}>{calc}</div>
        </div>
        <div className={styles.commands}>
          <div className={styles.numbers}>
            {
            NUMS.map(button => (
              <button 
                  key={+button} 
                  className={styles.numbersButton} 
                  onClick={() => {performTheOperation(button)}}
              >
                {button}
              </button>
            ))
            }
          </div>
          <div className={styles.operators}>
            {
            OPERATORS.map((operator, index) => (
              <button 
                  key={index} 
                  onClick={() => {performTheOperation(operator)}} 
              >
                {operator}
              </button>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
