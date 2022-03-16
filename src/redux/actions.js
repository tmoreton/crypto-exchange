import axios from 'axios'
const API_URL = 'https://api.coingecko.com/api/v3'

export const getExchanges = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/exchanges`)
      // Only top 10 echanges based on trust rank
      dispatch({ type: 'GET_EXCHANGES', payload: response.data.slice(0, 10) })
    } catch (error) {
      throw error
    }
  }
}

export const getExchange = (id) => {
  return async (dispatch) => {
    try {
      // since it's a single page app we dont want old cached data flashing before the API finishes running
      dispatch({ type: 'CLEAR_EXCHANGE'})
      const response = await axios.get(`${API_URL}/exchanges/${id}`)
      // Get more details on a specific exchange
      dispatch({ type: 'GET_EXCHANGE', payload: response.data})
    } catch (error) {
      throw error
    }
  }
}
