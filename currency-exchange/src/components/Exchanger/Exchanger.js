import React, {useEffect} from 'react';
import styles from './Exchanger.module.scss';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import { useSelector, useDispatch } from 'react-redux';

import {
  switchBase, 
  switchTarget, 
  changeBaseValue, 
  changeTargetValue, 
  saveAvailableKeysAndRatesQuery, 
  saveRatesOfBaseQuery, 
  resetBaseAndTargetValues 
} from '../../store/actions/actions';

function Exchanger() {

  const store = useSelector((state) => state);
  const {rates, target, base, baseValue, targetValue} = store;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveAvailableKeysAndRatesQuery());
  }, [dispatch]);

  const baseDropHandler = (e) => {
    dispatch(saveRatesOfBaseQuery(e.target.value));
    dispatch(switchBase(e.target.value));
    dispatch(resetBaseAndTargetValues());
  }

  const targetDropHandler = (e) => {
    dispatch(switchTarget(e.target.value));
    dispatch(resetBaseAndTargetValues());
  }

  const baseInputHandler = (e) => {
    dispatch(changeBaseValue(e.target.value))
    const exchangedValue = e.target.value * rates[target];
    dispatch(changeTargetValue(exchangedValue.toFixed(3)))
  }

  const targetInputHandler = (e) => {
    dispatch(changeTargetValue(e.target.value))
    const exchangedValue = e.target.value / rates[target];
    dispatch(changeBaseValue(exchangedValue.toFixed(3)))
  } 

  return (
    <div className={styles.globalWrapper}>

      <div className={styles.exchanger}>

        <h1 className={styles.heading}>Currency exchange</h1>

        <div className={styles.dropsContainer}>
          <Dropdown handler={baseDropHandler} value={base} label='Base currency:'/>
          <Dropdown handler={targetDropHandler} value={target} label='Convert to:'/>
        </div>

        { rates &&
          <div>Currency rate: {rates[target].toFixed(3)}</div>
        }

        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Buy</button>
          <button className={styles.button}>Sell</button>
        </div>

        <Input handler={baseInputHandler} value={baseValue} label={`You will give the next amount of ${base}`} current={rates} />
        <Input value={targetValue} handler={targetInputHandler} label={`You will get the next amount of ${target}`} />

      </div>

    </div>
  );
}

export default Exchanger;
