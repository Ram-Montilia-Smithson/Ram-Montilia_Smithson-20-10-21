const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "CHANGEFAVORITES":
            if (state.includes(action.value)) {
                state.splice(state.indexOf(action.value), 1)
                return state;
            }
            if (!state.includes(action.value)){
                state.push(action.value)
                return state
            }
            else return state
        default:
            return state;
    }
}

export default favoritesReducer