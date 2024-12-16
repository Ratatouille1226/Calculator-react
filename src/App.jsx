import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const OPERATORS = ['+', '-', '=', 'C'];
  
  const [calc, setCalc] = useState('');

  const getNumber = (num) => {
    if (num === '=') {
      setCalc(eval(calc));
    } else {
      setCalc((prev) => prev + num);
    }

    if (num === 'C') {
      setCalc('');
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.field}>
          <div className={styles.result}>{calc}</div>
        </div>
        <div className={styles.commands}>
          <div className={styles.numbers}>
            {
            NUMS.map(item => (
              <button 
                  key={+item} 
                  className={styles.numbersButton} 
                  onClick={() => {getNumber(item)}}
              >
                {item}
              </button>
            ))
            }
          </div>
          <div className={styles.operators}>
            {
            OPERATORS.map((operator, index) => (
              <button 
                  key={index} 
                  onClick={() => {getNumber(operator)}} 
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
