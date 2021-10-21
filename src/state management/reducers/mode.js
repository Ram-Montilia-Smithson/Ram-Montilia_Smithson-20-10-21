const modeReducer = (state = "LIGHT", action) => {
    switch (action.type) {
        case false:
            return "DARK";
        case true:
            return "LIGHT";
        default:
            return state;
    }
}

export default modeReducer