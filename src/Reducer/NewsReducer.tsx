const NewsReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_NEWS":
            return {
                ...state,
                isLoading: false,
                allNews: action.payload,
                headlines: action.payload
            }

        default:
            return state
    }

}

export default NewsReducer