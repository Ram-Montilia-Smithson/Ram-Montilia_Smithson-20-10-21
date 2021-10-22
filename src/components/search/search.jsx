import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
// import Dropdown from "react-bootstrap/Dropdown"
import "./search.css"
import { getAutoCompleteSearch, getCurrentConditions, getForecast } from '../forecast/accuweatherFunctions';
import { changeForecast, changeLocation, changeSearch, changeSearchResponse, changeWeather } from '../../state management/actions';
import { useDispatch, useSelector } from 'react-redux';

function Search() {

    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    const searchResponse = useSelector(state => state.searchResponse)

    const success = (position) => {
        console.log(position.coords);
        // insert call to accuweather with coords.latitude,coords.longitude
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
        console.log("searchText", searchText);
        const autoCompleteSearchArray = await getAutoCompleteSearch(searchText);
        console.log(autoCompleteSearchArray);
        dispatch(changeSearchResponse(autoCompleteSearchArray))
    }

    const getWeather = async (city) => {
        const weather = await getCurrentConditions(city.Key)
        const forecast = await getForecast(city.key)
        console.log(forecast);
        console.log(weather);
        dispatch(changeWeather(weather))
        dispatch(changeSearch(""))
        dispatch(changeLocation(city.name))
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
                <Button
                    id="search-button"
                    size="lg"
                    variant="outline-secondary"
                    // onClick=""
                >
                    search
                </Button>
            </InputGroup>
            <Button
                id="current-position-button"
                onClick={() => getCurrentLocation()}
                size="lg"
                variant="info"
            >
                Search&nbsp;Current&nbsp;Location
            </Button>
            </div>
            {search && <div id="dropdown">
                {searchResponse.map(item => {
                    return (
                        <span
                            className="dropdown-item"
                            onClick={() => getWeather(item)}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>}
        </div>
    )
}

export default Search
