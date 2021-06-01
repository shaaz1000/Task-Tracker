import ActionTypes from "../constants/index"


export const getJobInfo = params => {
    
    return {
        type : ActionTypes.SET_USER_FINANCE_INFO,
        payload : params
    }
}