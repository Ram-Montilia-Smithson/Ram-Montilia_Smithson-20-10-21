import { combineReducers } from "redux"
import degreesReducer from "./degrees";
import locationReducer from "./location";
import modeReducer from "./mode";


const allReducers = combineReducers({
    location: locationReducer,
    degrees: degreesReducer,
    mode: modeReducer
})

export default allReducers