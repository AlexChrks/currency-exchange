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

  // const {rates, target, base, baseValue, targetValue} = store
  // используй деструктуризацию
  const dispatch = useDispatch();

  useEffect(() => {

    saveAvailableKeysAndRatesQuery()(dispatch);
  //  диспатч не нужно передавать параметром, он подставляется под капотом
  //  можно просто диспатчить санку
    // dispatch(saveAvailableKeysAndRatesQuery())
  }, [dispatch]);

  const baseDropHandler = (e) => {
    saveRatesOfBaseQuery(e.target.value)(dispatch)
    dispatch(switchBase(e.target.value));
    resetBaseAndTargetValues()(dispatch);
  }

  const targetDropHandler = (e) => {
    dispatch(switchTarget(e.target.value));
    resetBaseAndTargetValues()(dispatch);
  }

  const baseInputHandler = (e) => {
    dispatch(changeBaseValue(e.target.value))
    const exchangedValue = e.target.value * store.rates[store.target];
    dispatch(changeTargetValue(exchangedValue.toFixed(3)))
  }

  const targetInputHandler = (e) => {
    dispatch(changeTargetValue(e.target.value))
    const exchangedValue = e.target.value / store.rates[store.target];
    dispatch(changeBaseValue(exchangedValue.toFixed(3)))
  }

  return (
    <div className={styles.globalWrapper}>

      <div className={styles.exchanger}>

        <h1 className={styles.heading}>Currency exchange</h1>

        <div className={styles.dropsContainer}>
          <Dropdown handler={baseDropHandler} value={store.base} label='Base currency:'/>
          <Dropdown handler={targetDropHandler} value={store.target} label='Convert to:'/>
        </div>

        { store.rates &&
          <div>Currency rate: {store.rates[store.target].toFixed(3)}</div>
        }

        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Buy</button>
          <button className={styles.button}>Sell</button>
        </div>

        <Input handler={baseInputHandler} value={store.baseValue} label={`You will give the next amount of ${store.base}`} current={store.rates} />
        <Input value={store.targetValue} handler={targetInputHandler} label={`You will get the next amount of ${store.target}`} />

      </div>

    </div>
  );
}

export default Exchanger;
