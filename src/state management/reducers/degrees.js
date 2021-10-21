const degreesReducer = (state = "F", action) => {
    switch (action.type) {
        case false:
            return "C";
        case true:
            return "F";
        default:
            return state;
    }
}

export default degreesReducer