import React from 'react';
import styles from './Input.module.scss'

function Input({handler, value, label}) {
  return (
    <label className={styles.inputLabel}>
      {label}
      <input className={styles.input} onChange={handler} value={value} type='number'/>
    </label>
  );
}

export default Input;
