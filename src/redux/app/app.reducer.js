const INITIAL_STATE = {
    lang: [],
    lang_tag : "en"
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_LANG_TAG":
            return {
                ...state,
                lang_tag: action.payload
            }

        default:
            return state;
    }
}

export default appReducer;