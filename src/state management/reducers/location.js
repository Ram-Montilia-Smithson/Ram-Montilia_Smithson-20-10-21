const locationReducer = (state = "here", action) => {
    switch (action.type) {
        case "CHANGE":
            return action.location;
        case "ERROR":
            return ""
        default:
            return state;
    }
}

export default locationReducer