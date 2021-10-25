// a CORS proxy server URL, copy of CORS Anywhere server (https://github.com/Rob--W/cors-anywhere) that Adds the Access-Control-Allow-Origin header to the response.
const CORSAnywhereServerAPI = "https://powerful-hamlet-89438.herokuapp.com/"

const apikey = "8AAT8cv2NIYsuujdj5Gx0CKFiLnxymvj"

export const getCurrentConditions = async (cityKey) => {

    const baseURL = `${CORSAnywhereServerAPI}https://dataservice.accuweather.com/currentconditions/v1/`
    const query = `${cityKey}?apikey=${apikey}`
    const response = await fetch(baseURL + query)
    if (response.ok) {
        const data = await response.json()
        return data[0]
    }
    if (!response.ok) {
        const data = await response.json()
        return data.Message
    }
}

export const getGeoposition = async (latitude, longitude) => {

    const baseURL = `${CORSAnywhereServerAPI}https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`
    const query = `?apikey=${apikey}&q=${latitude},${longitude}`
    const response = await fetch(baseURL + query);
    if (response.ok) {
        const data = await response.json()
        return data
    }
    if (!response.ok) {
        const data = await response.json()
        return data.Message
    }
}

export const getAutoCompleteSearch = async (searchText) => {

    const baseURL = `${CORSAnywhereServerAPI}https://dataservice.accuweather.com/locations/v1/cities/autocomplete`
    const query = `?apikey=${apikey}&q=${searchText}`
    const response = await fetch(baseURL + query);
    if (response.ok) {
        const data = await response.json()
        const autoCompleteSearch = await data.map(element => {
            return ({
                name: element.LocalizedName,
                Key: element.Key,
                img: "worldMap"
            })
        });
        return autoCompleteSearch
    }
    if (!response.ok) {
        const data = await response.json()
        return data.Message
    }
}

export const getForecast = async (cityKey) => {

    const baseURL = `${CORSAnywhereServerAPI}https://dataservice.accuweather.com/forecasts/v1/daily/5day/`
    const query = `${cityKey}?apikey=${apikey}`
    const response = await fetch(baseURL + query)
    if (response.ok) {
        const data = await response.json()
        return data
    }   
    if (!response.ok) {
        const data = await response.json()
        return data.Message
    }
}
