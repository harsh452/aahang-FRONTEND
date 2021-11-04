const initialState = null;

const loadTheBanner = (state = initialState,action) => {
    switch (action.type) {
        case "LOAD_BANNER":
            state = {...state,[action.pagedata]:action.payload}
            break;
    
        default:
            break;
    }
    return state;
}

export default loadTheBanner;