const initialState = null;

const loadTheCategory = (state = initialState,action) => {
    switch (action.type) {
        case "LOAD_CATEGORIES":
            state = action.payload

            break;
    
        default:
            break;
    }
    return state;
}

export default loadTheCategory;