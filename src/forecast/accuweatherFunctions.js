import AutoCompleteSearchResponseExample from "./AutoCompleteSearchResponseExample.json"
import CurrentConditionResponseExample from "./CurrentConditionResponseExample.json"
import DaysOfDailyForecast from "./5DaysOfDailyForecast.json"
import GeoPositionSearchResponseExample from "./GeoPositionSearchResponseExample.json"

// const apikey = "8AAT8cv2NIYsuujdj5Gx0CKFiLnxymvj"

// get weather information
export const getCurrentConditions = async (cityKey) => {

    const data = CurrentConditionResponseExample[0]
    return data

    // const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/"
    // const query = `${cityKey}?apikey=${apikey}`
    // const response = await fetch(baseURL + query)
    // const data = await response.json()

    // return data[0]
}

// get coords weather information
export const getGeoposition = async (latitude, longitude) => {

    const data = GeoPositionSearchResponseExample
    return data
    // console.log(latitude, longitude);
    // const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search"
    // const query = `?apikey=${apikey}&q=${latitude},${longitude}`
    // const response = await fetch(baseURL + query);
    // const data = await response.json();

    // return data
}

// get auto complete search
export const getAutoCompleteSearch = async (searchText) => {

    const autoCompleteSearch = AutoCompleteSearchResponseExample.map(element => {
        return ({
            name: element.LocalizedName,
            key: element.Key,
            img: "worldMap"
        })
    });
    return autoCompleteSearch

    // const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    // const query = `?apikey=${apikey}&q=${searchText}`
    // const response = await fetch(baseURL + query);
    // const data = await response.json()

    // const autoCompleteSearch = await data.map(element => {
    //     return ({
    //         name: element.LocalizedName,
    //         key: element.Key
    //     })
    // });
    // return autoCompleteSearch
}

// get forecast
export const getForecast = async (cityKey) => {

    const data = DaysOfDailyForecast
    return data

    // const baseURL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    // const query = `${cityKey}?apikey=${apikey}`
    // const response = await fetch(baseURL + query)
    // const data = await response.json()

    // return data
}
