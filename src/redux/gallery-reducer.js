const ADD_FOTO = 'ADD_FOTO';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    // galleryData: [
    //     {
    //     url: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzMjQ1NnwwfDF8YWxsfDJ8fHx8fHwyfA&ixlib=rb-1.2.1&q=80&w=400" 
    //     }
    // ]
    photosUrl: ["https://images.unsplash.com/photo-1608481337062-4093bf3ed404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzMjQ1NnwwfDF8YWxsfDJ8fHx8fHwyfA&ixlib=rb-1.2.1&q=80&w=400"] ,
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOTO: {
            // let newPost = {
            //     postText: state.newPostData,
            //     likesCount: 0
            // };
            return { 
                ...state,

               // postsData: [...state.postsData, newPost],       
            };
            //stateCopy.postsData = [...state.postsData];
            //stateCopy.postsData.push(newPost); // или без постДата
            //state.postsData.push(newPost);
            // state.newPostData = '';
            //stateCopy.newPostData = '';
            //return stateCopy;
        }
        // case UPDATE_NEW_POST_TEXT: {
        //    return { 
        //         ...state, 
        //         newPostData: action.newText
        //     };
        //     // state.newPostData = action.newText;
        //     // stateCopy.newPostData = action.newText;
        //     // return stateCopy;
        // }
        default:
            return state;
    };
    //return state;
};

export const addFotoActionCreator = () => ({ type: ADD_FOTO });

// export const updateNewPostTextActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// });

export default galleryReducer;


