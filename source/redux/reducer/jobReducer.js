import ActionTypes from "../constants/index"

const initialState = {
    jobInfo : "Hello Devpal"
}


const jobReducer = (state=initialState,action) => {
    switch (action.type) {
        case ActionTypes.SET_USER_FINANCE_INFO :
            return Object.assign({}, state,{
                jobInfo : action.payload
            });
        default:
            return state;
    }

    
}

export default jobReducer