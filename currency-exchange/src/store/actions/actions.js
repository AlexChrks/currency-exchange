import { apiQuery } from '../../api/apiQuery'

const SAVE_AVAILABLE_KEYS = 'SAVE_AVAILABLE_KEYS';
const SWITCH_BASE = 'SWITCH_BASE';
const SWITCH_TARGET = 'SWITCH_TARGET';
const SAVE_RATES_OF_BASE = 'SAVE_RATES_OF_BASE';
const CHANGE_BASE_VALUE = 'CHANGE_BASE_VALUE';
const CHANGE_TARGET_VALUE = 'CHANGE_TARGET_VALUE';

export function saveAvailableKeys(data) {
  return {
    type: SAVE_AVAILABLE_KEYS,
    payload: data
  }
}

export function saveAvailableKeysAndRatesQuery() {
  return (dispatch) => {
    apiQuery().then((data) => {
      const keys = Object.keys(data.rates);
      dispatch(saveAvailableKeys(keys));
      dispatch(saveRatesOfBase(data.rates));
      console.log(data)
    })
  };
}

export function switchBase(base) {
  return {
    type: SWITCH_BASE,
    payload: base
  }
}

export function switchTarget(target) {
  return {
    type: SWITCH_TARGET,
    payload: target
  }
}

export function saveRatesOfBase(rates) {
  return {
    type: SAVE_RATES_OF_BASE,
    payload: rates
  }
}

export function saveRatesOfBaseQuery(base) {
  return (dispatch) => {
    apiQuery(base).then((data) => {
      dispatch(saveRatesOfBase(data.rates))
    })
  };
}

export function resetBaseAndTargetValues() {
  return (dispatch) => {
    dispatch(changeBaseValue(''));
    dispatch(changeTargetValue(''));
  };
}

export function changeBaseValue(value) {
  return {
    type: CHANGE_BASE_VALUE,
    payload: value
  }
}

export function changeTargetValue(value) {
  return {
    type: CHANGE_TARGET_VALUE,
    payload: value
  }
}
