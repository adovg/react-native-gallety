import { createStore, combineReducers } from "redux";
import galleryReducer from "./gallery-reducer";
import homeReducer from "./home-reducer";
// import profileReducer from "./profile-reducer";




let reducers = combineReducers({
    homeScreen: homeReducer,     
    galleryScreen: galleryReducer
});

// createStore создает в себе 3 таких свойства
let store = createStore(reducers);
window.store = store;
//console.log(store);
export default store;