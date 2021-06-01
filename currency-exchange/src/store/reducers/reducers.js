const initialState = {
  availableKeys: [],
  base: 'USD',
  target: 'BYN',
  baseValue: '',
  targetValue: '',
};


export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_AVAILABLE_KEYS':
      return {
        ...state,
        availableKeys: [...action.payload]
      }
    case 'SWITCH_BASE':
      return {
        ...state,
        base: action.payload
      }
    case 'SWITCH_TARGET':
      return {
        ...state,
        target: action.payload,
      }  
    case 'SAVE_RATES_OF_BASE':
      return {
        ...state,
        rates: action.payload,
      }
    case 'CHANGE_BASE_VALUE':
      return {
        ...state,
        baseValue: action.payload,
      }
    case 'CHANGE_TARGET_VALUE':
      return {
        ...state,
        targetValue: action.payload,
      }          
    default:
      return state;
  }
}

export const selectAvailableKeys = state => state.availableKeys;