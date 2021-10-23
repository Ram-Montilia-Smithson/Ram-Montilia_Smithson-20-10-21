import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
// import Dropdown from "react-bootstrap/Dropdown"
import "./search.css"
import { getAutoCompleteSearch, getCurrentConditions, getForecast, getGeoposition } from '../../forecast/accuweatherFunctions';
import { changeForecast, changeLocation, changeSearch, changeSearchResponse, changeWeather } from '../../state management/actions';
import { useDispatch, useSelector } from 'react-redux';

function Search() {

    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    const searchResponse = useSelector(state => state.searchResponse)

    const success = async (position) => {
        console.log(position.coords);
        const location = await getGeoposition(position.coords.latitude,position.coords.longitude)
        const weather = await getCurrentConditions(location.Key)
        const forecast = await getForecast(location.Key)
        dispatch(changeWeather(weather))
        dispatch(changeForecast(forecast))
        dispatch(changeLocation({name: location.LocalizedName, key: location.Key}))
    }

    const error = (error) => {
        console.error(error);
        // handle error using modal
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    const autoComplete = async (searchText) => {
        dispatch(changeSearch(searchText))
        const autoCompleteSearchArray = await getAutoCompleteSearch(searchText);
        dispatch(changeSearchResponse(autoCompleteSearchArray))
    }

    const getWeather = async (location) => {
        const weather = await getCurrentConditions(location.Key)
        const forecast = await getForecast(location.key)
        dispatch(changeWeather(weather))
        dispatch(changeSearch(""))
        dispatch(changeLocation(location))
        dispatch(changeForecast(forecast))
    }

    return (
        <div>
        <div id="search">
            <InputGroup id="search-group">
                <InputGroup.Text>&#128269;</InputGroup.Text>
                <FormControl
                    as="input"
                    id="search-input"
                    placeholder="Enter Location"
                    aria-label="search"
                    aria-describedby="search"
                    onChange={(e) => autoComplete(e.target.value)}
                    value={search}
                    />
            </InputGroup>
            <Button
                id="current-position-button"
                onClick={() => getCurrentLocation()}
                size="lg"
                    variant="secondary"
            >
                Search&nbsp;Current&nbsp;Location
            </Button>
            </div>
            {search && <div id="dropdown">
                {searchResponse.map(location => {
                    return (
                        <span
                            key={location.key}
                            className="dropdown-item"
                            onClick={() => getWeather(location)}
                        >
                            {location.name}
                        </span>
                    )
                })}
            </div>}
        </div>
    )
}

export default Search
