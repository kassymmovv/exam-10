import {
    GET_NEWS_SUCCESS,

    SEND_NEWS_SUCCESS,
    GET_COMMENTS_SUCCESS,
    SEND_COMMENTS_SUCCESS, GET_MESS_BY_ID
} from "./actions";

const initialState = {
    messages:[],
    comments:[],
    oneMessage:'',
    error: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        case GET_MESS_BY_ID:
            return {
                ...state,
                oneMessage: action.mess
            };
        case GET_COMMENTS_SUCCESS:
            return {
              ...state,
              comments: action.comment
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