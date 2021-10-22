const searchReducer = (state = "", action) => {
    switch (action.type) {
        case "SEARCH":
            return action.value;
        default:
            return state;
    }
}

export default searchReducer