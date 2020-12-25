const ADD_FOTO = 'ADD_FOTO';

let initialState = {
    photosUrl: [] ,
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOTO: {
            return { 
                ...state,      
            };
        }
        default:
            return state;
    };

};





export default galleryReducer;


