const initialState = null;

const loadTheProvider = (state = initialState,action) => {
    switch (action.type) {
        case "LOAD_PROVIDER":
            state = {...state,[action.data]:action.payload,
            impData:action.data
            }
            break;
    
        default:
            break;
    }
    return state;
}

export default loadTheProvider;