import ActionTypes from "../constants/index"


const initialState = {
    name : ""
}

const ProfileReducer = (state=initialState,action) => {
    switch (action.type){
        case ActionTypes.SET_USER_NAME :
            return Object.assign({},state,
                {name:action.payload
            });
            default:
                return state
    }
    
}

export default ProfileReducer;