import axios from 'axios'
const API_URL = 'https://api.coingecko.com/api/v3'

export const getPing = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/ping`)
      console.log(response)
      // return { type: 'SIGN_IN', payload: input }
    } catch (error) {
      throw error
    }
  }
}
