import {
    GET_NEWS_SUCCESS,

    SEND_NEWS_SUCCESS,
    GET_COMMENTS_SUCCESS,
    SEND_COMMENTS_SUCCESS
} from "./actions";

const initialState = {
    messages:[],
    comments:[],
    error: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        case SEND_NEWS_SUCCESS:
            return {
                ...state,
                error: ''
            };

        default:
            return state;
    }
};

export default Reducer;