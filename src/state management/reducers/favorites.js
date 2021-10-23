const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "CHANGEFAVORITES":
            if (!state.length) return [...state, action.value];
            state.forEach((city, index) => {
                // console.log("index",index, "state.length", state.length);
                if (city.location.name === action.value.location.name) {
                    // console.log("in state");
                    return state = state.filter(favorite => favorite.location.name !== action.value.location.name)
                }
                if (index + 1 === state.length) {
                    // console.log("end");
                    state = [...state, action.value]
                }    
            });
            // console.log("not in state");
            return state;
        default:
            return state;
    }
}

export default favoritesReducer