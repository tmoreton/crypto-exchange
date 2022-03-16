import { combineReducers } from 'redux'

const initialState = {
  crypto: []
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXCHANGES':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  crypto: coinReducer,
})

export default rootReducer
