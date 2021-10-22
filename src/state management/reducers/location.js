const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGELOCATION":
            return action.value;
        default:
            return state;
    }
}

export default locationReducer