export const changeLocation = (location) => {
    if (typeof location === "object") {
        return {
            type: "CHANGELOCATION",
            value: location
        }
    }
    else return { type: null }
}

export const changeDegrees = (type) => {
    if (type === "C") {
        return {type: true}
    }
    else if (type === "F") {
        return {type: false}
    }
    else return {type: true}
}

export const changeMode = (mode) => {
    if (mode === "DARK") {
        return {type: true}
    }
    if (mode === "LIGHT") {
        return {type: false}
    }
    else return {type: true}
}

export const changeSearch = (searchText) => {
    if (typeof searchText === "string") {
        return {
            type: "SEARCH",
            value: searchText
        }
    }
    else return { type: null }
}

export const changeSearchResponse = (searchResponse) => {
    if (searchResponse.length > 0) {
        return {
            type: "RESPONSE",
            value: searchResponse
        }
    }
    else return { type: null }
}

export const changeWeather = (weather) => {
    if (typeof weather === "object") {
        return {
            type: "CHANGEWEATHER",
            value: weather
        }
    }
    else return { type: null }
}

export const changeForecast = (forecast) => {
    if (typeof forecast === "object") {
        return {
            type: "CHANGEFORECAST",
            value: forecast
        }
    }
    else return { type: null }
}

export const changeFavorites = (favorite) => {
    if (typeof favorite === "object"){
        return {
            type: "CHANGEFAVORITES",
            value: favorite
        }
    }
    else return { type: null }
}