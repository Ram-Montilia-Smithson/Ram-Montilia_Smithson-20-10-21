const searchResponseReducer = (state = [], action) => {
    switch (action.type) {
        case "RESPONSE":
            return action.value;
        default:
            return state;
    }
}

export default searchResponseReducer