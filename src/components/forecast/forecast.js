const apikey = "8AAT8cv2NIYsuujdj5Gx0CKFiLnxymvj"

// get weather information
const getWeather = async (cityKey) => {

    const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${cityKey}?apikey=${apikey}`
    const response = await fetch(baseURL + query)
    const data = await response.json()

    return data[0]
}

// get city information
const getCity = async (city) => {

    const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${APIkey}&q=${city}`
    const response = await fetch(baseURL + query);
    const data = response.json();

    return data[0]
}

getCity("manchester")
    .then(data => {
        return getWeather(data.Key)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))