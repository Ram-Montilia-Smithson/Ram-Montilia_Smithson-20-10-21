const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGEWEATHER":
            return action.value;
        default:
            return state;
    }
}

export default weatherReducer