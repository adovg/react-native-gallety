const GET_USER_NAME = 'GET_USER_NAME';
//const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    // userData: [
    //     {userName: 'John Doe!'}
    // ]
    userName: 'John Doe',
};

const homeReducer = (state = initialState, action) => {

    // switch (action.type) {
    //     case UPDATE_NEW_MESSAGE_BODY:
    //         return {
    //             ...state,
    //             newMessagesBody: action.body
    //         }

    //     case SEND_MESSAGE:
    //         let body = state.newMessagesBody;
    //         return {
    //             ...state,
    //             newMessagesBody: '',
    //             messagesData: [...state.messagesData, { id: 6, message: body }]

    //         }
    //     default:
    //         return state;
    // }
    return state;
};

// export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

// export const updateNewMessageBodyActionCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: body
// });

export default homeReducer;
