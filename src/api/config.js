import axios from 'axios'
import * as API_CONSTANTS from '../constants/ApiConstants'
import { AlertHelper } from '../utils/AlertHelper'
import * as STRINGS from '../constants/Strings'

//axios config 
const apiClient = axios.create({
    baseURL: API_CONSTANTS.BASE_URL,
    timeout: API_CONSTANTS.TIMEOUT
})


apiClient.interceptors.response.use(
    config => config,
    (error) => {

        if (!error.response) {
            // no internet connectivity
            AlertHelper.show(AlertHelper.ALERT_TYPE.ERROR, STRINGS.ERROR_TITLE, STRINGS.NO_INTERNET_CONNECT)
        }
        // handle request timeout
        else if (error.code === 'ECONNABORTED' || error.response.status === 404) {
            AlertHelper.show(AlertHelper.ALERT_TYPE.ERROR, STRINGS.ERROR_TITLE, STRINGS.REQUEST_TIMED_OUT)
            console.log(`A timeout happend on url ${error.config.url}`)
            //handle bad request
        } else if (error.response.status === 400) {
            if (error.response.data.details) {
                AlertHelper.show(AlertHelper.ALERT_TYPE.ERROR, STRINGS.ERROR_TITLE, error.response.data.details[0].messages[0])
            } else {
                AlertHelper.show(AlertHelper.ALERT_TYPE.ERROR, STRINGS.ERROR_TITLE, error.response.data.messages[0])
            }
            console.log(`Error on this api === ${error.config.url}`)
        } else {
            //handle other erros
            AlertHelper.show(AlertHelper.ALERT_TYPE.ERROR, STRINGS.ERROR_TITLE, STRINGS.REQUEST_TIMED_OUT)
            console.log(`Error on this api === ${error.config.url}`)
        }
        return Promise.reject(error);
    },
)


export default apiClient