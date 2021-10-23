import { combineReducers } from "redux"
import degreesReducer from "./degrees";
import favoritesReducer from "./favorites";
import forecastReducer from "./forecast";
import locationReducer from "./location";
import modeReducer from "./mode";
import searchReducer from "./search";
import searchResponseReducer from "./searchResponse";
import weatherReducer from "./weather";


const allReducers = combineReducers({
    location: locationReducer,
    degrees: degreesReducer,
    mode: modeReducer,
    search: searchReducer,
    searchResponse: searchResponseReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    favorites: favoritesReducer,
})

export default allReducers