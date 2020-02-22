import axios from 'axios'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const getMessagesSuccess = messages => ({type: GET_MESSAGES_SUCCESS, messages});
export const sendMessageSuccess = () => ({type: SEND_MESSAGE_SUCCESS});

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
// export const getComments = () => {
//
// };