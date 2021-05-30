import React from 'react';
import { useSelector } from 'react-redux';
import {selectAvailableKeys} from '../../store/reducers/reducers'

import styles from './Dropdown.module.scss'

function Dropdown({handler, value, label}) {
  
  const keys = useSelector((state) => selectAvailableKeys(state));

  return (
    <label className={styles.labelDrop}>
      {label}
      <select className={`form-select form-select-sm ${styles.dropdown}`} onChange={handler} value={value}>
        { keys.map((key) => <option key={key}>{key}</option>) }
      </select>
    </label>
  );
}

export default Dropdown;
