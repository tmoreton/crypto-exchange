import axios from 'axios'
const API_URL = 'https://api.coingecko.com/api/v3'

export const getExchanges = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/exchanges`)
      dispatch({ type: 'GET_EXCHANGES', payload: response.data.slice(0, 10) })
    } catch (error) {
      throw error
    }
  }
}
