import { combineReducers } from "redux"
import favoritesReducer from "./favorites";
import forecastReducer from "./forecast";
import locationReducer from "./location";
import searchReducer from "./search";
import searchResponseReducer from "./searchResponse";
import weatherReducer from "./weather";


const allReducers = combineReducers({
    location: locationReducer,
    search: searchReducer,
    searchResponse: searchResponseReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    favorites: favoritesReducer,
})

export default allReducers