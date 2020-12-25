import { createStore, combineReducers } from "redux";
import galleryReducer from "./gallery-reducer";
import homeReducer from "./home-reducer";

let reducers = combineReducers({
    homeScreen: homeReducer,     
    galleryScreen: galleryReducer
});


let store = createStore(reducers);
window.store = store;
export default store;