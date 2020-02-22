import axios from 'axios'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const SEND_NEWS_SUCCESS = 'SEND_NEWS_SUCCESS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const SEND_COMMENTS_SUCCESS = 'SEND_COMMENTS_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const getMessagesSuccess = messages => ({type: GET_NEWS_SUCCESS, messages});
export const getCommentsSuccess = comment => ({type:GET_COMMENTS_SUCCESS,comment});
export const sendMessageSuccess = () => ({type: SEND_NEWS_SUCCESS});
export const sendCommentsSuccess = () => ({type:SEND_COMMENTS_SUCCESS});
export const postMessage = message => {
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:1212/main', message);
            dispatch(sendMessageSuccess());

        } catch (e) {
            console.log(e)
        }
        dispatch(getMessages());
    }
};
export const getMessages = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:1212/main');
        dispatch(getMessagesSuccess(response.data));
        console.log(response);
    }
};
export const getMessagesById = id => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:1212/main/',id);
        dispatch(getMessagesSuccess(response.data));
        console.log(response);
    }
};
export const deleteMessageById = id => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:1212/main',id);
        // dispatch(getMessagesSuccess(response.data));
        console.log(response);
    }
};
export const getComments = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:1212/main/comments');
        dispatch(getCommentsSuccess(response.data));
        console.log(response);
    }
};
export const postComments = message => {
    return async (dispatch) => {
        try {
            await axios.post('http://localhost:1212/main/comments', message);
            dispatch(sendCommentsSuccess());

        } catch (e) {
            console.log(e)
        }
        // dispatch(getMessages());
    }
};
export const deleteComments = id => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:1212/main/comments/',id);
        // dispatch(getMessagesSuccess(response.data));
        console.log(response);
    }
};