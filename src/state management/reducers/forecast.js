const forecastReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGEFORECAST":
            return action.value;
        default:
            return state;
    }
}

export default forecastReducer