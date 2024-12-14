import { useState } from 'react';
import styles from './app.module.css';

function App() {
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.field}>
          <div className={styles.result}>{0}</div>
        </div>
        <div className={styles.commands}>
          <div className={styles.numbers}>
            {NUMS.map(item => (
              <button key={+item} className={styles.numbersButton}>{item}</button>
            ))}
          </div>
          <div className={styles.operators}>
              <button>+</button>
              <button>-</button>
              <button>=</button>
              <button>c</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
