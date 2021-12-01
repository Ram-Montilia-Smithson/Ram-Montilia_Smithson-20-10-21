import { combineReducers } from "redux"

const favoritesReducer = (state = [], action) => {
    if (action.type === "CHANGEFAVORITES") {
        const newState = state.filter(favorite => favorite.location.name !== action.payload.location.name)
        return (newState.length === state.length ? [...state, action.payload] : newState)
    }
    else {
        return state;
    }
}

const forecastReducer = (state = {}, action) => {
    return (action.type === "CHANGEFORECAST" ? action.payload : state)
}

const locationReducer = (state = {}, action) => {
    return (action.type === "CHANGELOCATION" ? action.payload : state)
}

const searchReducer = (state = "", action) => {
    return (action.type === "SEARCH" ? action.payload : state)
}

const searchResponseReducer = (state = [], action) => {
    return (action.type === "RESPONSE" ? action.payload : state)
}

const weatherReducer = (state = {}, action) => {
    return (action.type === "CHANGEWEATHER" ? action.payload : state)
}

const allReducers = combineReducers({
    location: locationReducer,
    search: searchReducer,
    searchResponse: searchResponseReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    favorites: favoritesReducer,
})

export default allReducers