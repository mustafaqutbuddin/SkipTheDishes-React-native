import * as API_CONSTANTS from '../constants/ApiConstants'
import apiClient from './config'



export const getRestaurantsByPostCode = async (postCode = 'ec4m', callback) => {
    try {
        postCode === '' ? 'ec4m' : postCode
        const response = await apiClient.get(API_CONSTANTS.GET_RESTAURANT_BY_POST_CODE + postCode)
        callback(response.data, undefined)
    } catch (error) {
        callback(undefined, error.message)
    }
}