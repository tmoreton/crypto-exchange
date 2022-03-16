import { combineReducers } from 'redux'

const initialState = {
  crypto: {
    exchanges: [],
    exchange: {
      name: '',
      image: '',
    }
  }
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXCHANGES':
      return {...state, exchanges: action.payload}
    case 'GET_EXCHANGE':
      return {...state, exchange: action.payload}
    case 'CLEAR_EXCHANGE':
      return {...state, exchange: {}}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  crypto: cryptoReducer,
})

export default rootReducer
