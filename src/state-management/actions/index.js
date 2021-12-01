export const changeLocation = location => ( { type: "CHANGELOCATION", payload: location } )

export const changeSearch = searchText => ( { type: "SEARCH", payload: searchText } )

export const changeSearchResponse = searchResponse => ( { type: "RESPONSE", payload: searchResponse } )

export const changeWeather = weather => ( { type: "CHANGEWEATHER", payload: weather } )

export const changeForecast = forecast => ( { type: "CHANGEFORECAST", payload: forecast } )

export const changeFavorites = favorite => ( { type: "CHANGEFAVORITES", payload: favorite } )