import ActionTypes from "../constants/index"


export const getProfileDetails = params => {
    return {
        type: ActionTypes.SET_USER_NAME,
        payload: params
    }
}