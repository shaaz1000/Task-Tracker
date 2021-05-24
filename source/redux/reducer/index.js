import jobReducer from "./jobReducer"
import ProfileReducer from "./ProfileReducer"
import {combineReducers} from 'redux'


const Appreducer = combineReducers({
    jobReducer,
    ProfileReducer
})


const rootReducer = (state, action) => {
    return Appreducer(state, action)
}

export default rootReducer


