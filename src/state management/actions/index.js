export const changeLocation = (location) => {
    if (location) {
        return {
            type: "CHANGE",
            value: location
        }
    }
    if (!location) {
        return {
            type: "ERROR"
        }
    }
}

export const changeDegrees = (type) => {
    if (type === "C") {
        return {type: true}
    }
    else if (type === "F") {
        return {type: false}
    }
    else return {type: true}
}

export const changeMode = (mode) => {
    if (mode === "DARK") {
        return {type: true}
    }
    if (mode === "LIGHT") {
        return {type: false}
    }
    else return {type: true}
}
